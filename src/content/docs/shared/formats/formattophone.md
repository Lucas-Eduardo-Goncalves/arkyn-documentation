---
title: formatToPhone
description: Formata uma string de número de telefone com base no código do país e prefixo opcional.
---

A função `formatToPhone` formata uma string de número de telefone de acordo com as regras de formatação de um país específico, identificadas pelo código do país e um prefixo opcional.

## Formato de Entrada

A string de entrada (`prop`) deve seguir um dos seguintes formatos:

- `"+<códigoDoPaís> <númeroDeTelefone>"`
- `"+<códigoDoPaís>-<prefixo> <númeroDeTelefone>"`

## Parâmetros

A função aceita o seguinte parâmetro:

**`prop`**

- **Tipo**: `string`
- **Descrição**: A string do número de telefone a ser formatada, incluindo o código do país e um prefixo opcional.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` com o número de telefone formatado de acordo com as regras do país.

## Erros

A função pode gerar os seguintes erros:

- `Error("Invalid phone number format...")`: Se a string de entrada não corresponder ao formato esperado.
- `Error("Invalid phone number format")`: Se o código do país ou o número de telefone estiverem ausentes.
- `Error("Invalid country code or prefix")`: Se a combinação de código de país e prefixo for inválida.
- `Error("Invalid country code")`: Se o código do país for inválido.

## Exemplo de Uso

### Exemplo 1: Formatar um Número de Telefone Brasileiro

```javascript
import { formatToPhone } from "./formatToPhone";

const formattedPhone = formatToPhone("+55 11912345678");
console.log(formattedPhone); // Saída: "(11) 91234-5678"
```

### Exemplo 2: Formatar um Número de Telefone dos EUA

```javascript
import { formatToPhone } from "./formatToPhone";

const formattedPhone = formatToPhone("+1-123 4567890");
console.log(formattedPhone); // Saída: "(123) 456-7890"
```

### Exemplo 3: Lidar com um Formato Inválido

```javascript
import { formatToPhone } from "./formatToPhone";

try {
  formatToPhone("11912345678");
} catch (error) {
  console.error(error.message);
  // Saída: "Invalid phone number format. Expected format: +<countryCode>-<optionalPrefix> <phoneNumber>"
}
```
