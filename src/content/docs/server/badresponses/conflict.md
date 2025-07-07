---
title: Conflict
description: Representa uma resposta de erro HTTP com status 409 (Conflict).
---

A classe `Conflict` é usada para padronizar a estrutura de uma resposta de erro "Conflict", incluindo o corpo da resposta, cabeçalhos, status e texto de status.

## Importação

```ts
import { Conflict } from "@arkyn/server";
```

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando a causa do conflito.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do conflito.

## Métodos

### `toResponse()`

Converte a instância `Conflict` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `Conflict` em um objeto `Response` usando o método `Response.json`.

- **Retorno**: `Response`
