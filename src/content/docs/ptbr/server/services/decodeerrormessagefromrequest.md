---
title: decodeErrorMessageFromRequest
description: Decodifica uma mensagem de erro de um objeto de dados ou resposta.
---

A função `decodeErrorMessageFromRequest` tenta extrair uma mensagem de erro significativa de objetos `data` ou `response`, verificando várias propriedades em uma ordem específica. Se nenhuma mensagem de erro válida for encontrada, retorna uma mensagem padrão: "Missing error message".

## Importação

```ts
import { decodeErrorMessageFromRequest } from "@arkyn/server";
```

## Parâmetros

- **data** (`any`): O objeto de dados que pode conter informações de erro.
- **response** (`Response`): O objeto de resposta que pode conter um `statusText`.

## Retorno

- **(`string`)**: A mensagem de erro decodificada ou uma mensagem padrão.
