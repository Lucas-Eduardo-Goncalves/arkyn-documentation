---
title: removeNonNumeric
description: Remove todos os caracteres não numéricos de uma string.
---

A função `removeNonNumeric` remove todos os caracteres que não são dígitos de uma string de entrada, retornando apenas os números.

## Importação

```ts
import { removeNonNumeric } from "@arkyn/shared";
```

## Parâmetros

A função aceita o seguinte parâmetro:

**`prop`**

- **Tipo**: `string`
- **Descrição**: A string de entrada da qual os caracteres não numéricos serão removidos.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` contendo apenas os caracteres numéricos da string de entrada.

## Exemplo de Uso

```javascript
import { removeNonNumeric } from "./removeNonNumeric";

const resultado = removeNonNumeric("abc123def456-!@#");
console.log(resultado); // Saída: "123456"
```
