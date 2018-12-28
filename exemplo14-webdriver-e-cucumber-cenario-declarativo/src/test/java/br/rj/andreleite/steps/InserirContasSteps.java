package br.rj.andreleite.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {
	private WebDriver driver;
		
	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\drivers_browsers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");	
		
		driver.findElement(By.id("email")).sendKeys("asmla@hotmail.com");	
		driver.findElement(By.id("senha")).sendKeys("Andre123");
		
		driver.findElement(By.tagName("button")).click();
		
		//Buscando elemento por XPATH -- Inicio sempre com //elementoweb[@class'']" 
		String paginaInicial = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText(); 
		Assert.assertEquals("Bem vindo, André Leite!", paginaInicial);
		
		driver.findElement(By.linkText("Contas")).click();				
	}

	@Quando("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String arg1) throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
		driver.findElement(By.id("nome")).sendKeys(arg1);	
		driver.findElement(By.tagName("button")).click();	  
	}
	
	//Caso queiramos ao iniciar fazer algo.. Como abrir browser, etc.
	@Before (order = 10)
	public void inicio() {
		System.out.println("Começando aqui");
	}
	
	@Before (order = 0)
	public void inicio2() {
		System.out.println("Começando aqui, parte 2");
	}
	
	//Como temos 2 afters precisamos colocar uma ordem de execução - Basta utilizar o "order"
	@After (order = 1, value = {"@funcional"})
	
	//método para criar evidências dos testes executados em cada um dos cenários do cucumber.
	public void screenshot(Scenario cenario) {
		// Iremos adicionar o retorno desse método a variável file
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File ("target/screenshot/"+cenario.getId()+".jpg"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//Iremos selecionar o "after" do cucumber, pois está preparado para ser executado após o término de cada um dos "scenarios".
	//Percebermos que colocamos mais um parâmetro nesse método: value, que é necessário para não termos inconsistências de um teste para o outro.
	@After (order = 0, value = {"@funcional"})
	public void fecharBrowser() {
		driver.quit();		
		System.out.println("Terminando");
	}
	
}
