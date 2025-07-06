---
title: decodeRequestBody
description: Decodifica o corpo de uma requisição em um objeto JavaScript.
---

## Descrição

A função `decodeRequestBody` tenta analisar o corpo da requisição na seguinte ordem:

1.  Tenta analisar o corpo como JSON.
2.  Se a análise JSON falhar, tenta analisar como dados de formulário codificados em URL.
3.  Se ambas as tentativas de análise falharem, registra os erros e retorna um objeto vazio.

## Parâmetros

- **req** (`Request`): O objeto de requisição de entrada contendo o corpo a ser decodificado.

## Retorno

- **(`Promise<any>`)**: Uma promessa que resolve para os dados decodificados como um objeto JavaScript.

## Erros

- Registra erros no console se o corpo da requisição não puder ser lido ou analisado.
