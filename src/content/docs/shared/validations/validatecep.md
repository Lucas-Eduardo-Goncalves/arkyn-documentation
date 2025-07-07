---
title: validateCep
description: Valida um CEP (Código de Endereçamento Postal) brasileiro.
---

A função `validateCep` verifica se um CEP brasileiro é válido. Um CEP válido deve conter 8 dígitos numéricos. A função remove caracteres não numéricos antes da validação.

## Importação

```ts
import { validateCep } from "@arkyn/shared";
```

## Parâmetros

- **rawCep** (`string`): A string do CEP, que pode conter formatação (e.g., "12345-678").

## Retorno

- **(`boolean`)**: Retorna `true` se o CEP for válido, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validateCep } from "./validateCep";

validateCep("12345-678"); // true
validateCep("12345678"); // true
validateCep("ABCDE-123"); // false
```
