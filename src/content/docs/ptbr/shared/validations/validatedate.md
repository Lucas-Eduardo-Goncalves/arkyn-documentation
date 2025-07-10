---
title: validateDate
description: Valida uma string de data com base no formato e configuração fornecidos.
---

A função `validateDate` verifica se uma string de data é válida, com base em um formato de entrada e configurações opcionais como ano mínimo e máximo.

## Importação

```ts
import { validateDate } from "@arkyn/shared";
```

## Parâmetros

- **rawDate** (`string`): A string de data a ser validada.
- **config** (`ValidateDateConfig`, opcional): Objeto de configuração para personalizar a validação.
  - `inputFormat` (`"DD/MM/YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD"`): O formato esperado da data. Padrão: `"DD/MM/YYYY"`.
  - `minYear` (`number`): O ano mínimo permitido. Padrão: `1900`.
  - `maxYear` (`number`): O ano máximo permitido. Padrão: `3000`.

## Retorno

- **(`boolean`)**: Retorna `true` se a data for válida, caso contrário, `false`.

## Erros

- **`Error`**: Lança um erro se um formato de data inválido for fornecido na configuração.

## Exemplo de Uso

```ts
import { validateDate } from "./validateDate";

validateDate("31/12/2023"); // true
validateDate("12-31-2023", { inputFormat: "MM-DD-YYYY" }); // true
validateDate("29/02/2023", { inputFormat: "DD/MM/YYYY" }); // false (não é ano bissexto)
```
