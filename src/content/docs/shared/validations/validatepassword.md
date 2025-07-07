---
title: validatePassword
description: Valida uma senha com base em um conjunto de regras.
---

A função `validatePassword` verifica se uma senha atende aos seguintes critérios:

- Mínimo de 8 caracteres
- Pelo menos 1 letra maiúscula
- Pelo menos 1 letra (qualquer caso)
- Pelo menos 1 número
- Pelo menos 1 caractere especial

## Importação

```ts
import { validatePassword } from "@arkyn/shared";
```

## Parâmetros

- **rawPassword** (`string`): A string da senha a ser validada.

## Retorno

- **(`boolean`)**: Retorna `true` se a senha for válida, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validatePassword } from "./validatePassword";

validatePassword("Senha@123"); // true
validatePassword("senha123"); // false (sem maiúscula e sem caractere especial)
```
