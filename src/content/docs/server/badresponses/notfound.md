---
title: NotFound
description: Representa uma resposta de erro HTTP com status 404 (Not Found).
---

A classe `NotFound` é usada para padronizar a estrutura de uma resposta de erro "Not Found".

## Importação

```ts
import { NotFound } from "@arkyn/server";
```

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando o motivo pelo qual o recurso não foi encontrado.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `NotFound` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `NotFound` em um objeto `Response` usando o método `Response.json`.

- **Retorno**: `Response`
