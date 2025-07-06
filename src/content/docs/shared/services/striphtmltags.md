---
title: stripHtmlTags
description: Remove todas as tags HTML de uma string.
---

A função `stripHtmlTags` remove todas as tags HTML de uma string de entrada, deixando apenas o texto puro.

## Parâmetros

A função aceita o seguinte parâmetro:

**`rawHtml`**

- **Tipo**: `string`
- **Descrição**: A string HTML a ser processada.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com todas as tags HTML removidas.

## Exemplo de Uso

```javascript
import { stripHtmlTags } from "./stripHtmlTags";

const html = "<p>Olá <strong>Mundo</strong></p>";
const textoPuro = stripHtmlTags(html);

console.log(textoPuro); // Saída: "Olá Mundo"
```
