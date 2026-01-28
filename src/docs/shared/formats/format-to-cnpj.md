# formatToCnpj

The `formatToCnpj` function is a utility for formatting strings into the Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica) format, which follows the pattern `XX.XXX.XXX/XXXX-XX`. This function is particularly useful when handling user input or displaying CNPJ data in a standardized format.

## Import

```ts
import { formatToCnpj } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `value` (required)

The input string to be formatted as a CNPJ. The string must contain exactly 14 numeric digits, though it can include special characters or spaces which will be automatically removed during processing. The function extracts only the numeric characters and formats them according to the Brazilian CNPJ standard.

**Type:** `string`

## Return

The function returns a formatted CNPJ string in the pattern `XX.XXX.XXX/XXXX-XX`, where X represents a numeric digit.

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid CNPJ format:** An error is thrown when the input does not contain exactly 14 numeric digits after removing all non-numeric characters. The error message will include the original input value to help identify what went wrong. This includes cases where the input is too short, too long, or contains only non-numeric characters.

## Notes

The function internally uses the `removeNonNumeric` utility to clean the input string, which means you can pass CNPJ values with or without formatting (e.g., "12345678000195", "12.345.678/0001-95", or "12345678/0001-95") and they will all be processed correctly.

The Brazilian CNPJ format consists of 14 digits divided into four groups: the first 8 digits identify the company, the next 4 digits represent the branch number (0001 for headquarters), and the last 2 digits are verification digits calculated using a specific algorithm.

This function is strict about the number of digits and will throw an error if the input doesn't match the expected length, ensuring data integrity and preventing malformed CNPJ values.

## Usage Examples

### Format a simple numeric string

```typescript
import { formatToCnpj } from "@arkyn/shared";

const cnpj = formatToCnpj("12345678000195");

console.log(cnpj);
// Output: "12.345.678/0001-95"
```

### Format a CNPJ with existing formatting

```typescript
import { formatToCnpj } from "@arkyn/shared";

const cnpj = formatToCnpj("12.345.678/0001-95");

console.log(cnpj);
// Output: "12.345.678/0001-95"
```

### Format a CNPJ with mixed characters

```typescript
import { formatToCnpj } from "@arkyn/shared";

const cnpj = formatToCnpj("12.345.678/0001-95");

console.log(cnpj);
// Output: "12.345.678/0001-95"
```

### Format a CNPJ with spaces

```typescript
import { formatToCnpj } from "@arkyn/shared";

const cnpj = formatToCnpj("12 345 678 0001 95");

console.log(cnpj);
// Output: "12.345.678/0001-95"
```

### Handle invalid CNPJ (too short)

```typescript
import { formatToCnpj } from "@arkyn/shared";

try {
  const cnpj = formatToCnpj("1234567800019");
  console.log(cnpj);
} catch (error) {
  console.error(error);
  // Output: Error: CNPJ must be contain 14 numeric digits: 1234567800019
}
```

### Handle invalid CNPJ (too long)

```typescript
import { formatToCnpj } from "@arkyn/shared";

try {
  const cnpj = formatToCnpj("123456780001956");
  console.log(cnpj);
} catch (error) {
  console.error(error);
  // Output: Error: CNPJ must be contain 14 numeric digits: 123456780001956
}
```

### Handle invalid CNPJ (no numeric digits)

```typescript
import { formatToCnpj } from "@arkyn/shared";

try {
  const cnpj = formatToCnpj("abcdefghijklmn");
  console.log(cnpj);
} catch (error) {
  console.error(error);
  // Output: Error: CNPJ must be contain 14 numeric digits: abcdefghijklmn
}
```

### Format a real Brazilian CNPJ

```typescript
import { formatToCnpj } from "@arkyn/shared";

const cnpj = formatToCnpj("00000000000191"); // Banco do Brasil S.A.

console.log(cnpj);
// Output: "00.000.000/0001-91"
```
