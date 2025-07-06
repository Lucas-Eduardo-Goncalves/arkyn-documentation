---
title: generateColorByString
description: Gera um código de cor hexadecimal com base em uma string de entrada.
---

A função `generateColorByString` cria um código de cor hexadecimal a partir de uma string de entrada. A função calcula um hash da string e o utiliza para derivar os valores RGB, que são então convertidos para um código de cor hexadecimal.

## Parâmetros

A função aceita o seguinte parâmetro:

**`prop`**

- **Tipo**: `string`
- **Descrição**: A string de entrada usada para gerar a cor.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` contendo um código de cor hexadecimal (por exemplo, `"#a1b2c3"`) derivado da string de entrada.

## Exemplo de Uso

```javascript
import { generateColorByString } from "./generateColorByString";

const cor = generateColorByString("exemplo");
console.log(cor); // Gera uma cor hexadecimal consistente, como "#5e8f9a"
```
