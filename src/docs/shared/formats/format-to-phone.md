# formatToPhone

A função `formatToPhone` formata uma string de número de telefone de acordo com as regras de formatação de um país específico, identificadas pelo código do país e um prefixo opcional.

## Importação

```ts
import { formatToPhone } from "@arkyn/shared";
```

## Formato de Entrada

A string de entrada (`prop`) deve seguir um dos seguintes formatos:

- `"+<códigoDoPaís> <númeroDeTelefone>"`
- `"+<códigoDoPaís>-<prefixo> <númeroDeTelefone>"`

## Parâmetros

A função aceita o seguinte parâmetro:

**`prop`**

- **Tipo**: `string`---
  title: formatToPhone
  description: Formats a phone number string based on the country code and optional prefix.

---

The `formatToPhone` function formats a phone number string according to the formatting rules of a specific country, identified by the country code and an optional prefix.

## Import

````ts
import { formatToPhone } from "@arkyn/shared"; ```

## Input Format

The input string (`prop`) must follow one of the following formats:

- `"+<countrycode> <phonenumber>"`
- `"+<countrycode>-<prefix> <phonenumber>"`

## Parameters

The function accepts the following parameters:

**`prop`**

- **Type**: `string`
- **Description**: The phone number string to be formatted, including the country code and an optional prefix.
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string` with the phone number formatted according to the country's rules.

## Errors

The function may generate the following errors:

- `Error("Invalid phone number format...")`: If the input string does not match the expected format. - `Error("Invalid phone number format")`: If the country code or phone number is missing.
- `Error("Invalid country code or prefix")`: If the country code and prefix combination is invalid.
- `Error("Invalid country code")`: If the country code is invalid.

## Usage Example

###   Formatting a Brazilian Phone Number

```javascript
import { formatToPhone } from "./formatToPhone";

const formattedPhone = formatToPhone("+55 11912345678");
console.log(formattedPhone); // Output: "(11) 91234-5678"
````

### Formatting a US Phone Number

```javascript
import { formatToPhone } from "./formatToPhone";

const formattedPhone = formatToPhone("+1-123 4567890");
console.log(formattedPhone); // Output: "(123) 456-7890"
```

### Handling an Invalid Format

```javascript
import { formatToPhone } from "./formatToPhone";

try {
  formatToPhone("11912345678");
} catch (error) {
  console.error(error.message); // Output: "Invalid phone number format. Expected format: +<countryCode>-<optionalPrefix> <phoneNumber>"
}
```

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
