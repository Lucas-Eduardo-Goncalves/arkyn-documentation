---
title: errorHandler
description: Lida com erros e os converte em respostas HTTP apropriadas.
---

A função `errorHandler` recebe um objeto de erro e determina seu tipo para retornar a resposta HTTP correspondente. Suporta tipos de resposta de sucesso e erro, convertendo-os para um formato padronizado usando o método `toResponse` quando aplicável.

## Importação

```ts
import { errorHandler } from "@arkyn/server";
```

## Parâmetros

- **error** (`any`): O objeto de erro a ser tratado.

## Retorno

- **(`Response`)**: O objeto de resposta HTTP correspondente se o erro corresponder a um tipo conhecido, ou uma `ServerError` genérica.
