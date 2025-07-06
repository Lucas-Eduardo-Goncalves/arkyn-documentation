---
title: formatJsonObject
description: Formata um objeto JSON em uma string legível com indentação adequada.
---

A função `formatJsonObject` é um utilitário para formatar um objeto ou valor JSON em uma string bem formatada e legível, com controle sobre o nível de indentação.

## Parâmetros

A função aceita os seguintes parâmetros:

**`obj`**

- **Tipo**: `any`
- **Descrição**: O objeto ou valor JSON a ser formatado. Pode ser um objeto, array, string ou valor primitivo.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`indentLevel`**

- **Tipo**: `number`
- **Descrição**: O nível de indentação a ser aplicado. Usado recursivamente para formatar estruturas aninhadas.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com a representação formatada do objeto JSON.

## Observações

- Se a entrada for um objeto, será formatado com chaves e valores devidamente indentados.
- Se a entrada for um array, cada elemento será formatado e indentado em uma nova linha.
- Se a entrada for uma string que pode ser analisada como JSON, a função tentará analisá-la e formatá-la.
- Valores primitivos (como números, booleanos e nulos) serão convertidos para sua representação em string.

## Exemplo de Uso

```javascript
import { formatJsonObject } from "./formatJsonObject";

const obj = { nome: "João", idade: 30, hobbies: ["leitura", "jogos"] };
const formatted = formatJsonObject(obj, 0);

console.log(formatted);
/*
Saída:
{
  "nome": "João",
  "idade": 30,
  "hobbies": [
    "leitura",
    "jogos"
  ]
}
*/
```
