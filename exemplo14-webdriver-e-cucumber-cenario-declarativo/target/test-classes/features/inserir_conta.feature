#language: pt

@outro
Funcionalidade: Cadastro de contas

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
	Dado que estou acessando a aplicação
	Quando informo o usuário "asmla@hotmail.com"
	E a senha "Andre123"
	E seleciono entrar
	Então visualizo a página inicial
	Quando seleciono Contas
	E seleciono Adicionar
	
Esquema do Cenário: Deve validar regras nos cadastros das contas
	Quando informo a conta "<conta>"
	E seleciono Salvar
	Então recebo a mensagem "<mensagem>"

Exemplos:
	| conta  					| mensagem 														|		
	| Conta de Teste  | Conta adicionada com sucesso! 			|
	|   							| Informe o nome da conta 						|	
	| Conta de Teste  | Já existe uma conta com esse nome!	|	