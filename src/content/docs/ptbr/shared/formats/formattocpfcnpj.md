---
title: formatToCpfCnpj
description: Formata uma string para o formato de CPF ou CNPJ, dependendo do comprimento.
---

A função `formatToCpfCnpj` remove todos os caracteres não numéricos de uma string e a formata como um CPF (se tiver 11 dígitos) ou como um CNPJ (se tiver 14 dígitos).

## Importação

```ts
import { formatToCpfCnpj } from "@arkyn/shared";
```

## Parâmetros

A função aceita o seguinte parâmetro:

**`value`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser formatada como CPF ou CNPJ.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o CPF ou CNPJ formatado.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid CPF or CNPJ length")`: Se a string de entrada, após a remoção de caracteres não numéricos, não tiver 11 ou 14 dígitos.

## Exemplo de Uso

### Exemplo 1: Formatar um CPF

```javascript
import { formatToCpfCnpj } from "./formatToCpfCnpj";

const formatted = formatToCpfCnpj("12345678909");
console.log(formatted); // Saída: "123.456.789-09"
```

### Exemplo 2: Formatar um CNPJ

```javascript
import { formatToCpfCnpj } from "./formatToCpfCnpj";

const formatted = formatToCpfCnpj("12345678000195");
console.log(formatted); // Saída: "12.345.678/0001-95"
```

### Exemplo 3: Lidar com um Valor Inválido

```javascript
import { formatToCpfCnpj } from "./formatToCpfCnpj";

try {
  formatToCpfCnpj("12345");
} catch (error) {
  console.error(error.message); // Saída: "Invalid CPF or CNPJ length"
}
```
