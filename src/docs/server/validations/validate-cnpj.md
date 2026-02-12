# validateCnpj

The `validateCnpj` function is a utility for validating Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers. It performs comprehensive validation including format checking, length verification, and mathematical validation of the two check digits using the official algorithm.

## Import

```ts
import { validateCnpj } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawCnpj` (required)

The CNPJ value to validate. This can be provided with or without formatting. The function accepts both the standard formatted pattern (`XX.XXX.XXX/XXXX-XX`) and the raw numeric format (`XXXXXXXXXXXXXX`).

**Type:** `string`

## Usage example

The function returns a boolean indicating whether the provided CNPJ is valid.

**Type:** `boolean`

```typescript
import { validateCnpj } from "@arkyn/server";

// Valid formatted CNPJ
const isValid1 = validateCnpj("11.444.777/0001-61");
console.log(isValid1);
// Output: true

// Valid unformatted CNPJ
const isValid2 = validateCnpj("11444777000161");
console.log(isValid2);
// Output: true

// Invalid CNPJ (wrong check digits)
const isValid3 = validateCnpj("12.345.678/0001-95");
console.log(isValid3);
// Output: false

// Invalid CNPJ (all digits equal)
const isValid4 = validateCnpj("11.111.111/1111-11");
console.log(isValid4);
// Output: false
```

## Validation Steps

The function performs the following validations in order:

1. **Empty check:** Returns `false` if the input is empty or null.

2. **Length bounds:** Returns `false` if the raw input length is greater than 18 characters or less than 14 characters.

3. **Whitespace check:** Returns `false` if the input contains any whitespace characters.

4. **Numeric length:** After removing non-numeric characters, the CNPJ must contain exactly 14 digits.

5. **Repeating digits:** Returns `false` if all 14 digits are identical (e.g., `11111111111111`), as these are mathematically valid but not issued.

6. **Check digit verification:** Calculates and validates both check digits using the official CNPJ algorithm with weighted multipliers.

## Notes

The CNPJ validation algorithm uses two verification digits (the last two digits) calculated from the first 12 digits using specific weight multipliers:

- **First check digit:** Uses multipliers `[5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]`
- **Second check digit:** Uses multipliers `[6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]`

The function uses `removeNonNumeric` from `@arkyn/shared` internally to strip formatting characters before validation.

This function validates the mathematical correctness of a CNPJ but does not verify whether the CNPJ is actually registered with the Receita Federal or corresponds to an active company. For official registry verification, use the Receita Federal API or similar services.

Common use cases include form validation, data sanitization before database storage, and input verification in registration forms.
