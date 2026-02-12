# formAsyncParse

The `formAsyncParse` function is the async version of `formParse`, designed for validating form data against Zod schemas that include asynchronous validation rules. This is essential when your schema uses async refinements like database lookups, API calls, or DNS verification (e.g., `validateEmail`).

## Import

```ts
import { formAsyncParse } from "@arkyn/server";
```

## Parameters

The function accepts a tuple with two elements:

### `formData` (required)

The form data object to be validated. This is typically the parsed body of a form submission.

**Type:** `{ [k: string]: any }`

### `schema` (required)

The Zod schema used for validation. Can include async refinements.

**Type:** `ZodType`

## Usage example

The function returns a Promise that resolves to an object with a `success` boolean.

```typescript
import { z } from "zod";
import { formAsyncParse, validateEmail } from "@arkyn/server";

// Schema with async email validation (DNS verification)
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .refine(
      async (email) => await validateEmail(email),
      "Invalid email or domain doesn't exist",
    ),
  username: z.string().refine(async (username) => {
    const exists = await checkUsernameExists(username);
    return !exists;
  }, "Username already taken"),
});

const formData = {
  name: "John",
  email: "user@invalid-domain.xyz",
  username: "john",
};

const result = await formAsyncParse([formData, schema]);

if (!result.success) {
  console.log(result.fieldErrors);
  // { email: "Invalid email or domain doesn't exist" }
  console.log(result.fields);
  // { name: "John", email: "user@invalid-domain.xyz", username: "john" }
} else {
  console.log(result.data);
  // Validated data with proper types
}
```

## Return structure

On **success**:

- `success`: `true`
- `data`: The parsed and validated data (typed according to the schema)

On **failure**:

- `success`: `false`
- `fieldErrors`: Object mapping field names to error messages
- `fields`: The original form data (useful for repopulating the form)

## When to use

Use `formAsyncParse` instead of `formParse` when your schema includes:

- **Email validation with DNS check** using `validateEmail`
- **Database lookups** (e.g., checking if username/email already exists)
- **External API validations** (e.g., verifying a coupon code)
- **Any Zod `.refine()` or `.superRefine()` with async callbacks**

## Notes

This function uses Zod's `safeParseAsync` internally, which properly awaits all async refinements before returning the result.

Nested field errors use dot notation for the field path (e.g., `address.city` for nested objects).

For synchronous validation only, prefer `formParse` as it has no async overhead.

This function is commonly used with the `SchemaValidator` class, which provides `formAsyncValidate` that throws `UnprocessableEntity` on failure.
