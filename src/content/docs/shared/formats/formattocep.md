---
title: formatToCep
description: Formata uma string para o formato de CEP (Código de Endereçamento Postal).
---

A função `formatToCep` remove todos os caracteres não numéricos de uma string e a formata como um CEP brasileiro no padrão `XXXXX-XXX`.

## Parâmetros

A função aceita o seguinte parâmetro:

**`value`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser formatada como CEP.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o CEP formatado no padrão `XXXXX-XXX`.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid CEP format")`: Se a string de entrada, após a remoção de caracteres não numéricos, não tiver 8 dígitos.

## Exemplo de Uso

### Exemplo 1: Formatar um CEP Válido

```javascript
import { formatToCep } from "./formatToCep";

const formattedCep = formatToCep("12345678");
console.log(formattedCep); // Saída: "12345-678"
```

### Exemplo 2: Lidar com um CEP Inválido

```javascript
import { formatToCep } from "./formatToCep";

try {
  formatToCep("1234");
} catch (error) {
  console.error(error.message); // Saída: "Invalid CEP format"
}
```
