---
title: validateCpf
description: Valida um número de CPF (Cadastro de Pessoas Físicas) brasileiro.
---

A função `validateCpf` valida um número de CPF. Ela remove caracteres não numéricos, verifica o comprimento (11 dígitos), garante que os dígitos não são todos iguais e calcula os dígitos verificadores para confirmar a validade.

## Importação

```ts
import { validateCpf } from "@arkyn/shared";
```

## Parâmetros

- **rawCpf** (`string`): A string do CPF, que pode incluir formatação.

## Retorno

- **(`boolean`)**: Retorna `true` se o CPF for válido, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validateCpf } from "./validateCpf";

validateCpf("123.456.789-09"); // false
validateCpf("111.444.777-35"); // true
```
