# formParse

The `formParse` function is a utility for validating form data against a Zod schema. It returns a structured result containing either the validated data or field-specific error messages, making it ideal for form validation in web applications.

## Import

```ts
import { formParse } from "@arkyn/server";
```

## Parameters

The function accepts a tuple with two elements:

### `formData` (required)

The form data object to be validated. This is typically the parsed body of a form submission.

**Type:** `{ [k: string]: any }`

### `schema` (required)

The Zod schema used for validation.

**Type:** `ZodType`

## Usage example

The function returns an object with a `success` boolean indicating the validation status.

```typescript
import { z } from "zod";
import { formParse } from "@arkyn/server";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "Must be at least 18"),
});

// Validation failure
const invalidData = { name: "", email: "invalid", age: 17 };
const errorResult = formParse([invalidData, schema]);

if (!errorResult.success) {
  console.log(errorResult.fieldErrors);
  // { name: "Name is required", email: "Invalid email", age: "Must be at least 18" }
  console.log(errorResult.fields);
  // { name: "", email: "invalid", age: 17 }
}

// Validation success
const validData = { name: "John", email: "john@example.com", age: 25 };
const successResult = formParse([validData, schema]);

if (successResult.success) {
  console.log(successResult.data);
  // { name: "John", email: "john@example.com", age: 25 }
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

## Notes

The function uses Zod's `safeParse` internally, which means it never throws errors. Instead, validation failures are returned as a structured object.

Nested field errors use dot notation for the field path (e.g., `address.city` for nested objects).

For async validation (e.g., checking email uniqueness), use `formAsyncParse` instead.

This function is commonly used with the `SchemaValidator` class, which provides additional utilities like `formValidate` that throws `UnprocessableEntity` on failure.
