import org.junit.Assert;

import com.sun.org.apache.xml.internal.security.utils.SignerOutputStream;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

// Crtl + Shift + O = Importa todas as bibliotecas necessárias entre o Java e o Cucumber.

public class ClasseJava_ChamaCucumber {
		
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("Qualquer coisa");
	}

	@Quando("^executá-lo$")
	public void executáLo() throws Throwable {
	}

	@Então("^a especificação deve finalizar com sucesso$")
	public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
	}
	
	//Abaixo trata-se do cenário para exemplo do "Contador"
	
	private int contador = 0;
	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int arg1) throws Throwable {
	   contador = arg1;
	}

	@Quando("^eu incrementar (\\d+)$")
	public void euIncrementar(int arg1) throws Throwable {
	    contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
	    //Apenas verifica se foi true ou false dando erro ou sucesso.
	    //Assert.assertTrue(arg1 == contador);
	    
	    // Validação exibindo os 2 valores e se ocorreu erro ou não
	    Assert.assertEquals(arg1, contador);	    	    
	}
}
