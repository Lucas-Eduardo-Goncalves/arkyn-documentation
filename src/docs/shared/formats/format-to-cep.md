# formatToCep

The `formatToCep` function is a utility for formatting strings into the Brazilian postal code (CEP) format, which follows the pattern `XXXXX-XXX`. This function is particularly useful when handling user input or displaying CEP data in a standardized format.

## Import

```ts
import { formatToCep } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `value` (required)

The input string to be formatted as a CEP. The string must contain exactly 8 numeric digits, though it can include special characters or spaces which will be automatically removed during processing. The function extracts only the numeric characters and formats them according to the Brazilian CEP standard.

**Type:** `string`

## Return

The function returns a formatted CEP string in the pattern `XXXXX-XXX`, where X represents a numeric digit.

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid CEP format:** An error is thrown when the input does not contain exactly 8 numeric digits after removing all non-numeric characters. The error message will include the original input value to help identify what went wrong. This includes cases where the input is too short, too long, or contains only non-numeric characters.

## Notes

The function internally uses the `removeNonNumeric` utility to clean the input string, which means you can pass CEP values with or without formatting (e.g., "12345678", "12345-678", or "12.345-678") and they will all be processed correctly.

The Brazilian CEP format consists of 8 digits divided into two groups: the first 5 digits represent the region, subregion, sector, and subsector, while the last 3 digits identify the specific distribution location.

This function is strict about the number of digits and will throw an error if the input doesn't match the expected length, ensuring data integrity and preventing malformed CEP values.

## Usage Examples

### Format a simple numeric string

```typescript
import { formatToCep } from "@arkyn/shared";

const cep = formatToCep("12345678");

console.log(cep);
// Output: "12345-678"
```

### Format a CEP with existing formatting

```typescript
import { formatToCep } from "@arkyn/shared";

const cep = formatToCep("12345-678");

console.log(cep);
// Output: "12345-678"
```

### Format a CEP with mixed characters

```typescript
import { formatToCep } from "@arkyn/shared";

const cep = formatToCep("12.345-678");

console.log(cep);
// Output: "12345-678"
```

### Format a CEP with spaces

```typescript
import { formatToCep } from "@arkyn/shared";

const cep = formatToCep("12 345 678");

console.log(cep);
// Output: "12345-678"
```

### Handle invalid CEP (too short)

```typescript
import { formatToCep } from "@arkyn/shared";

try {
  const cep = formatToCep("1234567");
  console.log(cep);
} catch (error) {
  console.error(error);
  // Output: Error: CEP must be contain 8 numeric digits: 1234567
}
```

### Handle invalid CEP (too long)

```typescript
import { formatToCep } from "@arkyn/shared";

try {
  const cep = formatToCep("123456789");
  console.log(cep);
} catch (error) {
  console.error(error);
  // Output: Error: CEP must be contain 8 numeric digits: 123456789
}
```

### Handle invalid CEP (no numeric digits)

```typescript
import { formatToCep } from "@arkyn/shared";

try {
  const cep = formatToCep("abcdefgh");
  console.log(cep);
} catch (error) {
  console.error(error);
  // Output: Error: CEP must be contain 8 numeric digits: abcdefgh
}
```

### Format a real Brazilian CEP

```typescript
import { formatToCep } from "@arkyn/shared";

const cep = formatToCep("01310100"); // Avenida Paulista, São Paulo

console.log(cep);
// Output: "01310-100"
```
