---
title: formatToCpf
description: Formata uma string para o formato de CPF (Cadastro de Pessoas Físicas).
---

A função `formatToCpf` remove todos os caracteres não numéricos de uma string e a formata como um CPF no padrão `XXX.XXX.XXX-XX`.

## Parâmetros

A função aceita o seguinte parâmetro:

**`value`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser formatada como CPF.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o CPF formatado no padrão `XXX.XXX.XXX-XX`.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid CPF format")`: Se a string de entrada, após a remoção de caracteres não numéricos, não tiver 11 dígitos.

## Exemplo de Uso

### Exemplo 1: Formatar um CPF Válido

```javascript
import { formatToCpf } from "./formatToCpf";

const formattedCpf = formatToCpf("12345678909");
console.log(formattedCpf); // Saída: "123.456.789-09"
```

### Exemplo 2: Lidar com um CPF Inválido

```javascript
import { formatToCpf } from "./formatToCpf";

try {
  formatToCpf("12345");
} catch (error) {
  console.error(error.message); // Saída: "Invalid CPF format"
}
```
