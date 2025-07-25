---
title: NoContent
description: Representa uma resposta HTTP de sucesso com status 204 (No Content).
---

A classe `NoContent` é usada para padronizar a estrutura de uma resposta "No Content", incluindo cabeçalhos, status e texto de status.

## Importação

```ts
import { NoContent } from "@arkyn/server";
```

## Construtor

- **init** (`ResponseInit`, opcional): Objeto de inicialização opcional para personalizar cabeçalhos, status e texto de status.

## Métodos

### `toResponse()`

Converte a instância `NoContent` em um objeto `Response`.

- **Retorno**: `Response`
