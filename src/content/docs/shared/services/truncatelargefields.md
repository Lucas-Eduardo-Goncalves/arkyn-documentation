---
title: truncateLargeFields
description: Trunca campos de string grandes em uma string JSON para um comprimento máximo especificado.
---

A função `truncateLargeFields` analisa uma string JSON, percorre sua estrutura recursivamente e trunca quaisquer campos de string que excedam um comprimento máximo especificado. Se um campo de string for truncado, ele é substituído por uma mensagem indicando o comprimento original do campo.

## Parâmetros

A função aceita os seguintes parâmetros:

**`jsonString`**

- **Tipo**: `string`
- **Descrição**: A string JSON a ser processada.
- **Obrigatório**: Sim
- **Padrão**: N/A

**`maxLength`** (opcional)

- **Tipo**: `number`
- **Descrição**: O comprimento máximo permitido para campos de string.
- **Padrão**: `1000`

## Retorno

A função retorna uma `string` JSON com os campos de string grandes truncados.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid JSON string")`: Se a string de entrada não for um JSON válido.

## Exemplo de Uso

```javascript
import { truncateLargeFields } from "./truncateLargeFields";

const json = JSON.stringify({
  nome: "João",
  descricao: "Uma descrição muito longa que excede o comprimento máximo...",
  aninhado: {
    detalhes: "Outra string longa que precisa de truncação.",
  },
});

const resultado = truncateLargeFields(json, 50);

console.log(resultado);
// Saída: '{"nome":"João","descricao":"To large information: field as 58 characters","aninhado":{"detalhes":"To large information: field as 42 characters"}}'
```
