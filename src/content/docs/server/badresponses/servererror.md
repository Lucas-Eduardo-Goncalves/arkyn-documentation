---
title: ServerError
description: Representa uma resposta de erro HTTP com status 500 (Internal Server Error).
---

A classe `ServerError` é usada para padronizar a estrutura de uma resposta de "Server Error".

## Importação

```ts
import { ServerError } from "@arkyn/server";
```

## Construtor

- **message** (`string`): Uma mensagem descritiva explicando a causa do erro do servidor.
- **cause** (`any`, opcional): Informações adicionais sobre a causa do erro.

## Métodos

### `toResponse()`

Converte a instância `ServerError` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`
