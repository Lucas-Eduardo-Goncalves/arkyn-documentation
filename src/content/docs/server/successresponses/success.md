---
title: Success
description: Representa uma resposta HTTP de sucesso com status 200 (OK).
---

A classe `Success` é usada para padronizar a estrutura de uma resposta "Success", incluindo o corpo da resposta, cabeçalhos, status e texto de status.

## Importação

```ts
import { Success } from "@arkyn/server";
```

## Genéricos

- **T**: O tipo do corpo da resposta.

## Construtor

- **body** (`T`): O corpo da resposta a ser incluído na resposta HTTP.
- **init** (`ResponseInit`, opcional): Objeto de inicialização opcional para personalizar cabeçalhos, status e texto de status.

## Métodos

### `toResponse()`

Converte a instância `Success` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`
