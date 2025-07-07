---
title: removeCurrencySymbols
description: Remove símbolos de moeda de uma string formatada.
---

A função `removeCurrencySymbols` remove símbolos de moeda de uma string de entrada. A função usa uma expressão regular para remover símbolos comuns como `R$`, `$`, `€`, `¥`, `£` e outros símbolos de moeda (`\p{Sc}`).

## Importação

```ts
import { removeCurrencySymbols } from "@arkyn/shared";
```

## Parâmetros

A função aceita o seguinte parâmetro:

**`formattedValue`**

- **Tipo**: `string`
- **Descrição**: A string de entrada que pode conter símbolos de moeda.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com todos os símbolos de moeda removidos e sem espaços em branco no início ou no final.

## Exemplo de Uso

```javascript
import { removeCurrencySymbols } from "./removeCurrencySymbols";

removeCurrencySymbols("R$13,45"); // Retorna "13,45"
removeCurrencySymbols("$123.45"); // Retorna "123.45"
removeCurrencySymbols("€99.99"); // Retorna "99.99"
removeCurrencySymbols("¥1,000"); // Retorna "1,000"
removeCurrencySymbols("123.45"); // Retorna "123.45" (nenhum símbolo para remover)
```
