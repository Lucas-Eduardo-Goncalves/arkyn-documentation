# validateEmail

The `validateEmail` function is a comprehensive utility for validating email addresses. It performs multi-layer validation including basic format checking, advanced RFC 5322 compliance rules, and DNS verification to ensure the email domain actually exists and can receive emails.

## Import

```ts
import { validateEmail } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `rawEmail` (required)

The email address string to validate. The function will trim any leading or trailing whitespace before validation.

**Type:** `string`

## Usage example

The function returns a Promise that resolves to a boolean indicating whether the email is valid.

**Type:** `Promise<boolean>`

```typescript
import { validateEmail } from "@arkyn/server";

// Valid email with existing domain
const isValid1 = await validateEmail("user@gmail.com");
console.log(isValid1);
// Output: true

// Invalid email (domain doesn't exist)
const isValid2 = await validateEmail("user@gmil.com");
console.log(isValid2);
// Output: false

// Invalid email (wrong format)
const isValid3 = await validateEmail("invalid-email");
console.log(isValid3);
// Output: false

// Invalid email (consecutive dots in local part)
const isValid4 = await validateEmail("user..name@example.com");
console.log(isValid4);
// Output: false

// Invalid email (local part starts with dot)
const isValid5 = await validateEmail(".user@example.com");
console.log(isValid5);
// Output: false
```

## Validation Steps

The function performs the following validations in order:

### 1. Basic Format Check

Validates the email against a comprehensive regex pattern that checks for:

- Valid characters in the local part (before @)
- Presence of exactly one @ symbol
- Valid domain format with proper label structure

### 2. Local Part Validation

The local part (before @) must comply with these rules:

- Length must be between 1 and 64 characters
- Cannot start or end with a dot (`.`)
- Cannot contain consecutive dots (`..`)
- Can only contain allowed characters: `a-z`, `A-Z`, `0-9`, `.!#$%&'*+/=?^_`{|}~-`

### 3. Domain Part Validation

The domain part (after @) must comply with these rules:

- Length must be between 1 and 253 characters
- Cannot start or end with a dot (`.`) or hyphen (`-`)
- Must contain at least two labels separated by dots (e.g., `example.com`)
- Each label must be between 1 and 63 characters
- Each label cannot start or end with a hyphen
- The TLD (last label) must be at least 2 characters and contain only letters

### 4. DNS Verification

After syntax validation, the function performs DNS lookups to verify the domain can receive emails:

- First checks for MX (Mail Exchange) records
- If no MX records, checks for A records (IPv4)
- If no A records, checks for AAAA records (IPv6)
- Returns `true` if any of these records exist

## Notes

This function is **asynchronous** because it performs DNS lookups to verify the email domain. Always use `await` when calling it.

The DNS verification requires network access and may add latency to the validation process. Consider this when using in performance-critical scenarios.

The function follows RFC 5322 specifications for email address validation, which covers the vast majority of real-world email addresses.

DNS verification checks for MX, A, and AAAA records in that order. If any record type is found, the domain is considered valid for receiving emails.

Common use cases include user registration validation, contact form verification, and data import sanitization where ensuring deliverability is important.

For scenarios where DNS verification is not needed or network latency is a concern, consider implementing a simpler regex-based validation.
