# language: pt

@funcional
Funcionalidade: Cadastro de conta

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
	Dado que desejo adicionar uma conta
		
Esquema do Cenário: Deve validar regras nos cadastros das contas
	Quando adiciono a conta "<conta>"
	Então recebo a mensagem "<mensagem>"

Exemplos:
	| conta  					| mensagem 														|		
	| Conta de Teste  | Conta adicionada com sucesso! 			|
	|   							| Informe o nome da conta 						|	
	| Conta de Teste  | Já existe uma conta com esse nome!	|	