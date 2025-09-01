# formatToCpfCnpj

The `formatToCpfCnpj` function removes all non-numeric characters from a string and formats it as a CPF (if it has 11 digits) or as a CNPJ (if it has 14 digits).

## Import

```ts
import { formatoToCpfCnpj } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

**`value`**

- **Type**: `string`
- **Description**: An input string to be formatted as a CPF or CNPJ. - **Required**: Yes
- **Default**: N/A

## Return

The function returns a string with the formatted CPF or CNPJ.

## Errors

The function may generate the following error:

- `Error("Invalid CPF or CNPJ length")`: If the input string, after removing non-numeric characters, does not have 11 or 14 digits.

## Usage Example

### Formatting a CPF

```javascript
import { formatoToCpfCnpj } from "./formatToCpfCnpj";

const formatado = formatToCpfCnpj("12345678909");
console.log(formatado); //Output: "123.456.789-09"
```

### Formatting a CNPJ (National Taxpayer Registry)

```javascript
import { formatoToCpfCnpj } from "./formatToCpfCnpj";

const formatado = formatToCpfCnpj("12345678000195");
console.log(formatado); //Output: "12.345.678/0001-95"
```

### Handling an Invalid Value

```javascript
import { formatoToCpfCnpj } from "./formatToCpfCnpj";

try {
  formatToCpfCnpj("12345");
} catch (error) {
  console.error(error.message); //Output: “Invalid CPF or CNPJ length”
}
```
