---
title: validateCnpj
description: Valida um número de CNPJ (Cadastro Nacional da Pessoa Jurídica) brasileiro.
---

## Descrição

A função `validateCnpj` realiza a validação de um número de CNPJ. Ela efetua a sanitização (removendo caracteres não numéricos), verifica o comprimento (deve ter 14 dígitos), checa por dígitos repetidos e valida os dois dígitos verificadores.

## Parâmetros

- **rawCnpj** (`string`): A string do CNPJ, que pode estar formatada.

## Retorno

- **(`boolean`)**: Retorna `true` se o CNPJ for válido, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validateCnpj } from "./validateCnpj";

validateCnpj("12.345.678/0001-95"); // false
validateCnpj("11.444.777/0001-61"); // true
```
