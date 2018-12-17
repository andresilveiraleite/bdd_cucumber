package br.rj.andreleite.runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

//Integrando com o Junit
@RunWith(Cucumber.class)

@CucumberOptions(
		// Escolhendo quais features devemos executar (Apenas os cenários BDDs)
		features = "src/test/resources/features/cucumber_exemplo.feature",
		
		// Informando aonde estão as classes com os devidos mapeamentos dos testes
		glue = "br.rj.andreleite.steps",
		
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

	
}
