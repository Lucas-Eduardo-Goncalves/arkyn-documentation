# validatePassword

The `validatePassword` function is a utility for validating password strength based on common security requirements. It ensures passwords meet minimum complexity standards by checking for length, character variety, and special characters.

## Import

```ts
import { validatePassword } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawPassword` (required)

The password string to validate.

**Type:** `string`

## Usage example

The function returns a boolean indicating whether the password meets all requirements.

**Type:** `boolean`

```typescript
import { validatePassword } from "@arkyn/server";

// Valid password (meets all requirements)
const isValid1 = validatePassword("Senha@123");
console.log(isValid1);
// Output: true

// Invalid password (no uppercase, no special character)
const isValid2 = validatePassword("senha123");
console.log(isValid2);
// Output: false

// Invalid password (too short)
const isValid3 = validatePassword("Se@1");
console.log(isValid3);
// Output: false

// Invalid password (no number)
const isValid4 = validatePassword("Senha@abc");
console.log(isValid4);
// Output: false

// Invalid password (no special character)
const isValid5 = validatePassword("Senha1234");
console.log(isValid5);
// Output: false
```

## Validation Rules

A password is considered valid only if **all** of the following conditions are met:

- **Minimum length**: At least 8 characters
- **Uppercase letter**: At least 1 uppercase letter (A-Z)
- **Lowercase letter**: At least 1 lowercase letter (a-z)
- **Number**: At least 1 numeric digit (0-9)
- **Special character**: At least 1 special character from the following set:

### Allowed Special Characters

The following special characters are recognized:

```
! @ # $ % ^ & * ( ) , . ? " : ; { } | < > _ - + = ~ ` [ ] \ /
```

## Notes

The function returns `false` immediately if the input is empty, null, or undefined.

All five validation rules must pass for the password to be considered valid. If any single rule fails, the entire validation fails.

This function performs client-safe validation and does not log or store the password. It's suitable for both client-side and server-side validation.

Common use cases include user registration forms, password change flows, and security policy enforcement.

For enhanced security, consider combining this validation with additional checks such as:

- Checking against common password lists
- Preventing passwords that contain the username
- Implementing password history validation
