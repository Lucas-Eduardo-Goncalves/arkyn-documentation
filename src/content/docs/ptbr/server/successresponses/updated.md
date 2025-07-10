---
title: Updated
description: Representa uma resposta HTTP de sucesso com status 200 (OK) ou outros códigos de status personalizados.
---

A classe `Updated` é usada para padronizar a estrutura de uma resposta "Updated", incluindo o corpo da resposta, cabeçalhos, status e texto de status.

## Importação

```ts
import { Updated } from "@arkyn/server";
```

## Genéricos

- **T**: O tipo do corpo da resposta.

## Construtor

- **body** (`T`): O corpo da resposta a ser incluído na resposta HTTP.
- **init** (`ResponseInit`, opcional): Objeto de inicialização opcional para personalizar cabeçalhos, status e texto de status.

## Métodos

### `toResponse()`

Converte a instância `Updated` em um objeto `Response` com um corpo JSON.

- **Retorno**: `Response`

### `toJson()`

Converte a instância `Updated` em um objeto `Response` usando o método `Response.json`.

- **Retorno**: `Response`
