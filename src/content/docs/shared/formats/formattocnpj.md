---
title: formatToCnpj
description: Formata uma string para o formato de CNPJ (Cadastro Nacional da Pessoa Jurídica).
---

A função `formatToCnpj` remove todos os caracteres não numéricos de uma string e a formata como um CNPJ no padrão `XX.XXX.XXX/XXXX-XX`.

## Parâmetros

A função aceita o seguinte parâmetro:

**`value`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser formatada como CNPJ.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o CNPJ formatado no padrão `XX.XXX.XXX/XXXX-XX`.

## Erros

A função pode gerar o seguinte erro:

- `Error("Invalid CNPJ length")`: Se a string de entrada, após a remoção de caracteres não numéricos, não tiver 14 dígitos.

## Exemplo de Uso

### Exemplo 1: Formatar um CNPJ Válido

```javascript
import { formatToCnpj } from "./formatToCnpj";

const formattedCnpj = formatToCnpj("12345678000195");
console.log(formattedCnpj); // Saída: "12.345.678/0001-95"
```

### Exemplo 2: Lidar com um CNPJ Inválido

```javascript
import { formatToCnpj } from "./formatToCnpj";

try {
  formatToCnpj("12345");
} catch (error) {
  console.error(error.message); // Saída: "Invalid CNPJ length"
}
```
