# validateCpf

The `validateCpf` function is a utility for validating Brazilian CPF (Cadastro de Pessoas Físicas) numbers. The CPF is a unique identifier assigned to Brazilian citizens and residents. This function performs comprehensive validation including format checking, length verification, and mathematical validation of the two check digits using the official algorithm.

## Import

```ts
import { validateCpf } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawCpf` (required)

The CPF value to validate. This can be provided with or without formatting. The function accepts both the standard formatted pattern (`XXX.XXX.XXX-XX`) and the raw numeric format (`XXXXXXXXXXX`).

**Type:** `string`

## Usage example

The function returns a boolean indicating whether the provided CPF is valid.

**Type:** `boolean`

```typescript
import { validateCpf } from "@arkyn/server";

// Valid formatted CPF
const isValid1 = validateCpf("111.444.777-35");
console.log(isValid1);
// Output: true

// Valid unformatted CPF
const isValid2 = validateCpf("11144477735");
console.log(isValid2);
// Output: true

// Invalid CPF (wrong check digits)
const isValid3 = validateCpf("123.456.789-09");
console.log(isValid3);
// Output: false

// Invalid CPF (all digits equal)
const isValid4 = validateCpf("111.111.111-11");
console.log(isValid4);
// Output: false
```

## Validation Steps

The function performs the following validations in order:

1. **Empty check:** Returns `false` if the input is empty or null.

2. **Length bounds:** Returns `false` if the raw input length is greater than 14 characters or less than 11 characters.

3. **Whitespace check:** Returns `false` if the input contains any whitespace characters.

4. **Numeric length:** After removing non-numeric characters, the CPF must contain exactly 11 digits.

5. **Repeating digits:** Returns `false` if all 11 digits are identical (e.g., `11111111111`), as these are mathematically valid but not issued.

6. **Check digit verification:** Calculates and validates both check digits using the official CPF algorithm.

## Notes

The CPF validation algorithm uses two verification digits (the last two digits) calculated from the first 9 digits using decreasing weight multipliers:

- **First check digit:** Calculated using factors from 10 down to 2
- **Second check digit:** Calculated using factors from 11 down to 2

For each digit calculation, the remainder of the weighted sum divided by 11 determines the check digit: if the remainder is less than 2, the digit is 0; otherwise, it's 11 minus the remainder.

The function uses `removeNonNumeric` from `@arkyn/shared` internally to strip formatting characters before validation.

This function validates the mathematical correctness of a CPF but does not verify whether the CPF is actually registered with the Receita Federal or corresponds to a real person. For official registry verification, use the Receita Federal API or similar services.

Common use cases include form validation, data sanitization before database storage, and input verification in registration forms.
