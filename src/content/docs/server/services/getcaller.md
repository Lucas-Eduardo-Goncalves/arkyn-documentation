---
title: getCaller
description: Recupera informações sobre o chamador da função atual.
---

## Descrição

A função `getCaller` analisa o rastreamento de pilha para determinar o caminho do arquivo e o nome da função do chamador. Ela exclui entradas de rastreamento de pilha relacionadas ao pacote `@arkyn/server` e tenta resolver o caminho do arquivo em relação ao diretório raiz do projeto.

## Retorno

- **(`object`)**: Um objeto contendo:
  - `functionName`: O nome da função que chamou a função atual.
  - `callerInfo`: O caminho do arquivo do chamador em relação à raiz do projeto.
