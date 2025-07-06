---
title: formatJsonString
description: Formata uma string JSON para um formato mais legível.
---

A função `formatJsonString` analisa uma string JSON e a formata em uma representação mais legível, utilizando a função `formatJsonObject` internamente.

## Parâmetros

A função aceita o seguinte parâmetro:

**`jsonString`**

- **Tipo**: `string`
- **Descrição**: A string JSON a ser formatada.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o JSON formatado.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid JSON string ...")`: Se a string de entrada não for um JSON válido. O erro original da análise será incluído na mensagem.

## Exemplo de Uso

### Exemplo 1: Formatar uma String JSON Válida

```javascript
import { formatJsonString } from "./formatJsonString";

const jsonString = '{"nome":"João","idade":30,"hobbies":["leitura","jogos"]}';
const formatted = formatJsonString(jsonString);

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

### Exemplo 2: Lidar com uma String JSON Inválida

```javascript
import { formatJsonString } from "./formatJsonString";

const invalidJsonString = '{"nome":"João", "idade":30,';

try {
  const formatted = formatJsonString(invalidJsonString);
  console.log(formatted);
} catch (e) {
  console.error(e.message);
  // Saída esperada: "Invalid JSON string ..." seguido pelo erro de sintaxe.
}
```
