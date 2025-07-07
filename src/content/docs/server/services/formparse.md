---
title: formParse
description: Analisa e valida dados de formulário com base em um esquema Zod.
---

A função `formParse` é um utilitário para analisar dados de formulário (`formData`) em relação a um esquema Zod (`schema`). Ela retorna um objeto indicando sucesso ou falha, juntamente com os dados validados ou erros de campo.

## Importação

```ts
import { formParse } from "@arkyn/server";
```

## Tipos

- `FormParseProps`: Uma tupla contendo `formData` e `schema`.
- `FormParseReturnType`: O tipo de retorno, que pode ser `SuccessResponse` ou `ErrorResponse`.

## Retorno

- **`SuccessResponse`**: Se a validação for bem-sucedida.
  - `success`: `true`
  - `data`: Os dados validados.
- **`ErrorResponse`**: Se a validação falhar.
  - `success`: `false`
  - `fields`: Os campos originais.
  - `fieldErrors`: Os erros de validação por campo.
