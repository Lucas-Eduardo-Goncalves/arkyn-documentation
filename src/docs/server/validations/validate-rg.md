# validateRg

The `validateRg` function is a utility for performing generic validation of Brazilian RG (Registro Geral) numbers. Since RG formats vary by state, this function focuses on basic structural validation rather than state-specific rules.

## Import

```ts
import { validateRg } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawRg` (required)

The RG string to validate. This can be provided with or without formatting (dots, hyphens).

**Type:** `string`

## Usage example

The function returns a boolean indicating whether the RG has a valid structure.

**Type:** `boolean`

```typescript
import { validateRg } from "@arkyn/server";

// Valid RG with formatting
const isValid1 = validateRg("12.345.678-9");
console.log(isValid1);
// Output: true

// Valid RG without formatting
const isValid2 = validateRg("123456789");
console.log(isValid2);
// Output: true

// Valid RG with letter verifier
const isValid3 = validateRg("12345678X");
console.log(isValid3);
// Output: true

// Invalid RG (state prefix not supported)
const isValid4 = validateRg("MG-12.345.678");
console.log(isValid4);
// Output: false

// Invalid RG (too short)
const isValid5 = validateRg("123456");
console.log(isValid5);
// Output: false
```

## Validation Rules

The function performs the following structural validations:

### 1. Format Check

The raw input can only contain:

- Numeric digits (0-9)
- Letters (a-z, A-Z)
- Dots (`.`)
- Hyphens (`-`)

### 2. Length Check

After removing non-alphanumeric characters, the RG must have between 7 and 9 characters.

### 3. Structure Check

The cleaned RG must follow this pattern:

- 7 to 8 numeric digits
- Optionally followed by a single digit or letter (X/x) as the verifier

## Notes

The RG (Registro Geral) is Brazil's general identity document, issued by each state's Public Security Secretariat (SSP). Unlike CPF, there is no standardized national format for RG numbers.

This function performs **generic structural validation** only. It does not:

- Validate state-specific formats
- Verify check digits (as algorithms vary by state)
- Confirm the RG exists in any registry

Some Brazilian states use different formats that may not be compatible with this validation:

- State prefixes (e.g., "MG-12.345.678") are not supported
- Some states use letters in positions other than the verifier

Common use cases include basic form validation and input sanitization where a loose RG format check is sufficient.

For strict validation of RG numbers, you would need state-specific validation logic, as each issuing authority has its own format and verification rules.
