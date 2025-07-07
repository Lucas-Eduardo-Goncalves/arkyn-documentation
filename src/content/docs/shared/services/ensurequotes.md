---
title: ensureQuotes
description: Garante que uma string esteja entre aspas.
---

A função `ensureQuotes` verifica se uma string de entrada já está entre aspas (simples ou duplas). Se não estiver, a função a envolve em aspas duplas.

## Importação

```ts
import { ensureQuotes } from "@arkyn/shared";
```

## Parâmetros

A função aceita o seguinte parâmetro:

**`rawValue`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser verificada e, potencialmente, colocada entre aspas.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string`. Se a string de entrada já estiver entre aspas, ela é retornada sem alterações. Caso contrário, é retornada envolvida em aspas duplas.

## Exemplo de Uso

### Exemplo 1: String sem Aspas

```javascript
import { ensureQuotes } from "./ensureQuotes";

const resultado = ensureQuotes("meu-valor");
console.log(resultado); // Saída: "\"meu-valor\""
```

### Exemplo 2: String com Aspas Duplas

```javascript
import { ensureQuotes } from "./ensureQuotes";

const resultado = ensureQuotes('"meu-valor"');
console.log(resultado); // Saída: '"meu-valor"'
```

### Exemplo 3: String com Aspas Simples

```javascript
import { ensureQuotes } from "./ensureQuotes";

const resultado = ensureQuotes("'meu-valor'");
console.log(resultado); // Saída: "'meu-valor'"
```
