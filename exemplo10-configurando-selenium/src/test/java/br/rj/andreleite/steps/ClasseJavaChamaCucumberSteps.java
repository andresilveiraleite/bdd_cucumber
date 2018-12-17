package br.rj.andreleite.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.rj.andreleite.utils.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class ClasseJavaChamaCucumberSteps {
		
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
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
	
	// Inicialização da data.
	Date entrega = new Date();
	
	@Dado("^que a entrega é dia (.*)$")
	public void queAEntregaÉDia(@Transform(DateConverter.class) Date data) throws Throwable {
		entrega = data;
		System.out.println(entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (.+)$")
	public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {
		Calendar cal =  Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, arg1);
		}		
		entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(data, dataFormatada);
	}
	
	// Desafio REGEX
	
	 
	//@Dado("^que o ticket é AF(\\d+)$")
	//Utilizando a ferramenta Regulex vimos que podíamos deixar mais genérico. Com o "." podemos ter qualquer caracter
	
	// Outro macete é: quando colocamos entre parenteses criamos um novo grupo para input. e o "Interrogação" = 0 ou 1 ou seja, pode ter ou não o "ESPECIAL".
	//REGEX: ^que o ticket( especial)? eh A.(\d+)$
	//@Dado("^que o ticket( especial)? é A.(\\d+)$")
	
	//Sendo que o exercício era com o regex do 1 cenário, reaproveitarmos totalmente o 2 cenário e não aproveitar nada para o 3 cenário
	//Logo precisamos acertar o regex:
	@Dado("^que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF(String tipo, String arg1) throws Throwable {
	
	}

	@Dado("^que o valor da passagem é R\\$ (.*)$")
	// O double possui um construtor que aceita "String", logo ele conseguiu fazer a conversão diretamente.
	// Não foi necessário implementar um construtor. 
	public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
	   //System.out.println(numero);
	}
	
	//Como não queremos reaproveitar esse regex para o 3 cenário, vamos limitar o tamanho do nome para:
	// No mínimo 5 e no máximo 20 caracteres
	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String arg1) throws Throwable {
	
	}
	
	//Como não queremos reaproveitar esse regex para o 3 cenário, precisamos alterar a busca por d. (que pega tudo para algo específico)
	@Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(String telefone) throws Throwable {
	   
	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	   
	}

	@Então("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	  
	}
}
