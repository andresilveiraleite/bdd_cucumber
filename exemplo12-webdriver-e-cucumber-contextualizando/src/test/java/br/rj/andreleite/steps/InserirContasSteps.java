package br.rj.andreleite.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {
	private WebDriver driver;
	
	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\drivers_browsers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");	
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String arg1) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);	
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		//Buscando elemento por XPATH -- Inicio sempre com //elementoweb[@class'']" 
		String paginaInicial = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText(); 
		Assert.assertEquals("Bem vindo, André Leite!", paginaInicial);	
	}

	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
		driver.findElement(By.linkText("Contas")).click();	  
	}

	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String arg1) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(arg1);	   
	}

	@Quando("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {
		String contaIncluida = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText(); 
		Assert.assertEquals("Conta adicionada com sucesso!", contaIncluida);	
	}

	@Então("^sou notificar que o nome da conta é obrigatório$")
	public void souNotificarQueONomeDaContaÉObrigatório() throws Throwable {
		String contaObrigatoria = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText(); 
		Assert.assertEquals("Informe o nome da conta", contaObrigatoria);	
	}

	@Então("^sou notificado que já existe uma conta com esse nome$")
	public void souNotificadoQueJáExisteUmaContaComEsseNome() throws Throwable {
		String contaJaExiste = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText(); 
		Assert.assertEquals("Já existe uma conta com esse nome!", contaJaExiste);	
	
	}
	
	//Caso queiramos ao iniciar fazer algo.. Como abrir browser, etc.
	@Before
	public void inicio() {
		System.out.println("INICIANDO");
	}
	
	// Iremos selecionar o "after" do cucumber, pois está preparado para ser executado após o término de cada um dos "scenarios".
	@After
	public void fecharBrowser() {
		driver.quit();
		System.out.println("TERMINANDO");
	}
	
}
