package br.rj.andreleite.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

//Integrando com o Junit
@RunWith(Cucumber.class)

@CucumberOptions(
		// Informando aonde estão nossas features (Apenas os cenários BDDs)
		//features = "src/test/resources/features/cucumber_exemplo.feature",
		features = "src/test/resources/features/inserir_conta.feature",
		
		// Informando aonde estão as classes com os devidos mapeamentos dos testes
		glue = "br.rj.andreleite.steps",
		
		
		// TRABALHANDO COM TAGS:
		// Informando quais features serão executadas (Basta no cenário ou funcionalidade que desejas colocar o "@qualquerdescrição"
		//tags = "@esse",
		
		//Ou podemos executar todos "menos" os que estão com o @ignored (basta colocar o @ignored no cenário que desejas)
		tags = "~@ignore",
		
		//Ou podemos executar tags especificamente JUNTAS)
		//tags = {"@tipo1", "@tipo2"},	
		
		//Ou podemos executar tags em qualquer cenário esteja)
		//tags = {"@tipo1, @tipo2"},
		
		//Podemos trabalhar com tags por ex. TESTES rápidos, TESTES lentos. Por testes: Smoke test, Unitários, Integrados, testes UI 
		//e com um único runner rodo apenas os testes que desejo. 
		
		//Imagine por ex. Tenho várias features que correspondam a mesma macro funcionalidade, podemos colocar a mesma tag em todas essas fetaures
		// E quando quisermos fazer um teste geral dessa macro funcionalidade, rodo apenas essa tag.
		
		// Outro exemplo bacana: Estamos trabalhando com ágil e estamos desenvolvendo scripts de testes para a "Sprint 3", podemos incluir uma tag Sprint 3
		// e outra de @regressão, logo quando estivermos em outras sprints, poderemos executar os testes de regressão e o da sprint atual.
		
		//Printa no console as funcionalidades documentadas que estão sendo executadas.
		plugin = "pretty",
		
		//Retira carateres e erros na exibição no console
		monochrome = true,
		
		//Deixar o formato dos métodos com as letras iniciando em maiúsculo e as mantendo juntas.
		//Exemplo: Antes: que_criei_o_arquivo_corretamente Depois: queCrieiOArquivoCorretamente
		snippets = SnippetType.CAMELCASE,
		
		//Validar se o mapeamento está correto -Seu padrão = false
		dryRun = false,
		
		//Configurando o mesmo como true, o resultado do junit irá falhar quando tiver qualquer "nova" construções de funcionalidade no cucumber.
		strict = false
		)

public class Runner {
	
	//Antes da execução dos cenários de testes, podemos realizar algumas validações, como "ZERAR" a base de dados por ex.
	@BeforeClass
	public static void reset() {
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");	
		driver.findElement(By.id("email")).sendKeys("asmla@hotmail.com");
		driver.findElement(By.id("senha")).sendKeys("Andre123");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();	
	}
}
