---
title: validateRg
description: Valida um RG (Registro Geral) brasileiro de forma genérica.
---

A função `validateRg` realiza uma validação estrutural básica de um número de RG. Ela remove caracteres não alfanuméricos, verifica se o comprimento está entre 7 e 9 dígitos e permite opcionalmente uma letra final (dígito verificador).

## Importação

```ts
import { validateRg } from "@arkyn/shared";
```

## Parâmetros

- **rawRg** (`string`): A string do RG, que pode estar formatada.

## Retorno

- **(`boolean`)**: Retorna `true` se o formato do RG for considerado válido, caso contrário, retorna `false`.

## Exemplo de Uso

```ts
import { validateRg } from "./validateRg";

validateRg("12.345.678-9"); // true
validateRg("MG-12.345.678"); // false (formato não suportado)
validateRg("12345678X"); // true
```
