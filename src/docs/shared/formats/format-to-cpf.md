# formatToCpf

The `formatToCpf` function is a utility for formatting strings into the Brazilian CPF (Cadastro de Pessoas Físicas) format, which follows the pattern `XXX.XXX.XXX-XX`. This function is particularly useful when handling user input or displaying CPF data in a standardized format.

## Import

```ts
import { formatToCpf } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `value` (required)

The input string to be formatted as a CPF. The string must contain exactly 11 numeric digits, though it can include special characters or spaces which will be automatically removed during processing. The function extracts only the numeric characters and formats them according to the Brazilian CPF standard.

**Type:** `string`

## Return

The function returns a formatted CPF string in the pattern `XXX.XXX.XXX-XX`, where X represents a numeric digit.

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid CPF format:** An error is thrown when the input does not contain exactly 11 numeric digits after removing all non-numeric characters. The error message will include the original input value to help identify what went wrong. This includes cases where the input is too short, too long, or contains only non-numeric characters.

## Notes

The function internally uses the `removeNonNumeric` utility to clean the input string, which means you can pass CPF values with or without formatting (e.g., "12345678909", "123.456.789-09", or "123456789-09") and they will all be processed correctly.

The Brazilian CPF format consists of 11 digits divided into four groups: the first 9 digits identify the individual taxpayer, and the last 2 digits are verification digits calculated using a specific algorithm.

This function is strict about the number of digits and will throw an error if the input doesn't match the expected length, ensuring data integrity and preventing malformed CPF values.

## Usage Examples

### Format a simple numeric string

```typescript
import { formatToCpf } from "@arkyn/shared";

const cpf = formatToCpf("12345678909");

console.log(cpf);
// Output: "123.456.789-09"
```

### Format a CPF with existing formatting

```typescript
import { formatToCpf } from "@arkyn/shared";

const cpf = formatToCpf("123.456.789-09");

console.log(cpf);
// Output: "123.456.789-09"
```

### Format a CPF with mixed characters

```typescript
import { formatToCpf } from "@arkyn/shared";

const cpf = formatToCpf("123.456.789-09");

console.log(cpf);
// Output: "123.456.789-09"
```

### Format a CPF with spaces

```typescript
import { formatToCpf } from "@arkyn/shared";

const cpf = formatToCpf("123 456 789 09");

console.log(cpf);
// Output: "123.456.789-09"
```

### Handle invalid CPF (too short)

```typescript
import { formatToCpf } from "@arkyn/shared";

try {
  const cpf = formatToCpf("1234567890");
  console.log(cpf);
} catch (error) {
  console.error(error);
  // Output: Error: CPF must be contain 11 numeric digits: 1234567890
}
```

### Handle invalid CPF (too long)

```typescript
import { formatToCpf } from "@arkyn/shared";

try {
  const cpf = formatToCpf("123456789012");
  console.log(cpf);
} catch (error) {
  console.error(error);
  // Output: Error: CPF must be contain 11 numeric digits: 123456789012
}
```

### Handle invalid CPF (no numeric digits)

```typescript
import { formatToCpf } from "@arkyn/shared";

try {
  const cpf = formatToCpf("abcdefghijk");
  console.log(cpf);
} catch (error) {
  console.error(error);
  // Output: Error: CPF must be contain 11 numeric digits: abcdefghijk
}
```

### Format a real Brazilian CPF

```typescript
import { formatToCpf } from "@arkyn/shared";

const cpf = formatToCpf("11144477735");

console.log(cpf);
// Output: "111.444.777-35"
```
