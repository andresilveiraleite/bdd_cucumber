$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cenarioDeclarativo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de conta",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-conta",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcional"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 18,
      "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 19,
      "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 20,
      "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 21,
      "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 331123,
  "status": "passed"
});
formatter.before({
  "duration": 108672,
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 18078811576,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;2",
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
  "line": 14,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
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
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 5046234281,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 354190781,
  "status": "passed"
});
formatter.after({
  "duration": 737328540,
  "status": "passed"
});
formatter.before({
  "duration": 83875,
  "status": "passed"
});
formatter.before({
  "duration": 68193,
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 31174987035,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;3",
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
  "line": 14,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
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
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 1104670143,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 323749374,
  "status": "passed"
});
formatter.after({
  "duration": 798641303,
  "status": "passed"
});
formatter.before({
  "duration": 89345,
  "status": "passed"
});
formatter.before({
  "duration": 66006,
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 5026119672,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Deve validar regras nos cadastros das contas",
  "description": "",
  "id": "cadastro-de-conta;deve-validar-regras-nos-cadastros-das-contas;;4",
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
  "line": 14,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
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
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 1139328258,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 433262368,
  "status": "passed"
});
formatter.after({
  "duration": 838496368,
  "status": "passed"
});
});