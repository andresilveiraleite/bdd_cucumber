$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcional"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 28,
      "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 291374,
  "status": "passed"
});
formatter.before({
  "duration": 61629,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"asmla@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"Andre123\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3387596611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asmla@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 103421139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andre123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 70519287,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 773447169,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 38172466,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 65806987,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 247279725,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcional"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 83276262,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 396031852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 35401683,
  "status": "passed"
});
formatter.after({
  "duration": 304298103,
  "status": "passed"
});
formatter.after({
  "duration": 687336672,
  "status": "passed"
});
formatter.before({
  "duration": 120341,
  "status": "passed"
});
formatter.before({
  "duration": 86428,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"asmla@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"Andre123\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3027409155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asmla@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 106926736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andre123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 67112516,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 635515972,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 36723621,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 65031329,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 248108261,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcional"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 55074310,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 247465708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 38354801,
  "status": "passed"
});
formatter.after({
  "duration": 265585559,
  "status": "passed"
});
formatter.after({
  "duration": 711085244,
  "status": "passed"
});
formatter.before({
  "duration": 152068,
  "status": "passed"
});
formatter.before({
  "duration": 128365,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"asmla@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"Andre123\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3141496237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asmla@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 109833906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andre123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 64362884,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 657028370,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 40410825,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 84341836,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 332640820,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-nos-cadastros-das-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcional"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 78197468,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 310881173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 30901259,
  "status": "passed"
});
formatter.after({
  "duration": 283816999,
  "status": "passed"
});
formatter.after({
  "duration": 688229756,
  "status": "passed"
});
});