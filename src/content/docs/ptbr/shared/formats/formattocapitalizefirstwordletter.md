---
title: formatToCapitalizeFirstWordLetter
description: Formata uma frase capitalizando a primeira letra de cada palavra.
---

A função `formatToCapitalizeFirstWordLetter` recebe uma string e capitaliza a primeira letra de cada palavra, mantendo as demais letras em minúsculas. As palavras são separadas por espaços.

## Importação

```ts
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";
```

## Parâmetros

A função aceita o seguinte parâmetro:

**`sentence`**

- **Tipo**: `string`
- **Descrição**: A frase a ser formatada.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com a frase formatada, onde a primeira letra de cada palavra está capitalizada.

## Exemplo de Uso

### Exemplo 1: Formatação Básica

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hello world");
console.log(formatted); // Saída: "Hello World"
```

### Exemplo 2: Com Texto Maiúsculo

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("HELLO WORLD");
console.log(formatted); // Saída: "Hello World"
```

### Exemplo 3: Com Texto Misto

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hELLO WoRLd");
console.log(formatted); // Saída: "Hello World"
```

### Exemplo 4: Com Múltiplas Palavras

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter(
  "javascript is an amazing language"
);
console.log(formatted); // Saída: "Javascript Is An Amazing Language"
```

### Exemplo 5: String Vazia

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("");
console.log(formatted); // Saída: ""
```
