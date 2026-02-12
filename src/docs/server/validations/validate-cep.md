# validateCep

The `validateCep` function is a utility for validating Brazilian CEP (Código de Endereçamento Postal) values. It checks whether a given string represents a valid postal code format, accepting both formatted (`12345-678`) and unformatted (`12345678`) inputs.

## Import

```ts
import { validateCep } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawCep` (required)

The CEP value to validate. This can be provided with or without formatting. The function accepts both the standard formatted pattern with a hyphen (`XXXXX-XXX`) and the raw numeric format (`XXXXXXXX`).

**Type:** `string`

## Usage example

The function returns a boolean indicating whether the provided CEP is valid.

**Type:** `boolean`

```typescript
import { validateCep } from "@arkyn/server";

// Formatted CEP
const isValid1 = validateCep("12345-678");
console.log(isValid1);
// Output: true

// Unformatted CEP
const isValid2 = validateCep("12345678");
console.log(isValid2);
// Output: true

// Invalid CEP (contains letters)
const isValid3 = validateCep("ABCDE-123");
console.log(isValid3);
// Output: false

// Invalid CEP (wrong length)
const isValid4 = validateCep("1234-567");
console.log(isValid4);
// Output: false
```

## Notes

The function validates CEP values in two accepted formats:

- **Formatted:** `XXXXX-XXX` (5 digits, hyphen, 3 digits)
- **Unformatted:** `XXXXXXXX` (8 consecutive digits)

A valid CEP must contain exactly 8 numeric digits. Any input that doesn't match one of these two patterns is immediately rejected.

The function uses `removeNonNumeric` from `@arkyn/shared` internally to strip non-numeric characters before performing the final length validation.

This function only validates the format of the CEP, not whether the CEP actually exists or corresponds to a real address in Brazil. For address lookup functionality, use an external API service like ViaCEP or Correios.

Common use cases include form validation, data sanitization before database storage, and input verification in address forms.
