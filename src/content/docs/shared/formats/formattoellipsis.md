---
title: formatToEllipsis
description: Trunca um texto para um comprimento máximo e adiciona reticências.
---

A função `formatToEllipsis` trunca uma string para um comprimento máximo especificado e anexa reticências (`...`) se o texto original exceder esse comprimento.

## Parâmetros

A função aceita os seguintes parâmetros:

**`text`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser truncada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`maxLength`**

- **Tipo**: `number`
- **Descrição**: O comprimento máximo permitido para a string antes da truncação.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string`. Se o texto de entrada for maior que `maxLength`, retorna a string truncada com reticências. Caso contrário, retorna a string original.

## Exemplo de Uso

### Exemplo 1: Truncar uma String Longa

```javascript
import { formatToEllipsis } from "./formatToEllipsis";

const texto = "Este é um texto muito longo que precisa ser truncado.";
const resultado = formatToEllipsis(texto, 20);

console.log(resultado); // Saída: "Este é um texto muito..."
```

### Exemplo 2: String Curta Não é Truncada

```javascript
import { formatToEllipsis } from "./formatToEllipsis";

const texto = "Texto curto.";
const resultado = formatToEllipsis(texto, 20);

console.log(resultado); // Saída: "Texto curto."
```
