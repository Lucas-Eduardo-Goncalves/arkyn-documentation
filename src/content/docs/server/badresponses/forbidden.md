---
title: Forbidden
description: Representa uma resposta de erro HTTP com status 403 (Forbidden).
---

## Descrição

A classe `Forbidden` é usada para padronizar a estrutura de uma resposta de erro "Forbidden".

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando por que o acesso é proibido.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `Forbidden` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `Forbidden` em um objeto `Response` usando o método `Response.json`.

- **Retorno**: `Response`
