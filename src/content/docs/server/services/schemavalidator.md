---
title: SchemaValidator
description: Uma classe para validar dados usando esquemas Zod.
---

A classe `SchemaValidator` fornece uma maneira de validar dados em relação a um esquema Zod, com métodos para diferentes tipos de validação (segura, com lançamento de erro e específica para formulários).

## Importação

```ts
import { SchemaValidator } from "@arkyn/server";
```

## Construtor

- **schema** (`Schema`): O esquema Zod a ser usado para validação.

## Métodos

### `isValid(data: any)`

Verifica se os dados são válidos de acordo com o esquema.

- **Retorno**: `boolean`

### `safeValidate(data: any)`

Valida os dados e retorna um objeto com o resultado, sem lançar erros.

- **Retorno**: `z.SafeParseReturnType`

### `validate(data: any)`

Valida os dados e lança uma `ServerError` se a validação falhar.

- **Retorno**: Os dados validados.

### `formValidate(data: any, message?: string)`

Valida dados de formulário e lança uma `UnprocessableEntity` se a validação falhar.

- **Retorno**: Os dados validados.
