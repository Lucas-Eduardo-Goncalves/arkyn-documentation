---
title: Unauthorized
description: Representa uma resposta de erro HTTP com status 401 (Unauthorized).
---

A classe `Unauthorized` é usada para padronizar a estrutura de uma resposta de erro "Unauthorized".

## Importação

```ts
import { Unauthorized } from "@arkyn/server";
```

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando por que a solicitação não está autorizada.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `Unauthorized` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `Unauthorized` em um objeto `Response` usando o método `Response.json`.

- **Retorno**: `Response`
