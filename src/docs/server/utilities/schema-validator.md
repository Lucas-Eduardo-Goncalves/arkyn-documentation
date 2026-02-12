# SchemaValidator

The `SchemaValidator` is a utility class that provides multiple validation methods for Zod schemas. It offers flexible validation approaches including safe validation, error-throwing validation, and form-specific validation with structured error handling for web applications.

## Import

```ts
import { SchemaValidator } from "@arkyn/server";
```

## Methods

The class is instantiated with a Zod schema: `new SchemaValidator(schema)`.

**`isValid(data)`** - Checks if data is valid without throwing errors. Returns `boolean`.

**`safeValidate(data)`** - Returns a `ZodSafeParseResult` with success status and data or errors.

**`validate(data)`** - Validates and returns parsed data. Throws `ServerError` on failure.

**`formValidate(data, message?)`** - Validates form data. Throws `UnprocessableEntity` with structured field errors.

**`formAsyncValidate(data, message?)`** - Async version of `formValidate` for schemas with async validation rules.

## Usage example

```typescript
import { z } from "zod";
import { SchemaValidator } from "@arkyn/server";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "Must be at least 18"),
});

const validator = new SchemaValidator(userSchema);

// Boolean check (no errors thrown)
const isValid = validator.isValid({
  name: "John",
  email: "john@example.com",
  age: 25,
});

// Safe validation with result object
const result = validator.safeValidate(data);
if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.issues);
}

// Validate with ServerError on failure
try {
  const validData = validator.validate(data);
} catch (error) {
  console.error(error.message);
  // "Error validating:
  // -> name: Name is required"
}

// Form validation with UnprocessableEntity
try {
  const formData = validator.formValidate(requestBody, "Invalid form data");
} catch (error) {
  console.log(error.fieldErrors); // { name: "Name is required" }
  console.log(error.data.scrollTo); // "name" (first error field)
}

// Async form validation
const asyncData = await validator.formAsyncValidate(requestBody);
```

## Error structure

When using `validate`, errors are formatted as:

```
Error validating:
-> fieldName: Error message
-> nestedObject.field: Nested error message
```

When using `formValidate` or `formAsyncValidate`, the `UnprocessableEntity` error contains:

- `fields`: The original form field values
- `fieldErrors`: Map of field names to error messages
- `data.scrollTo`: First field with an error (for auto-scroll)
- `message`: Optional custom error message

## Notes

The `SchemaValidator` integrates with Arkyn's error handling system (`ServerError` and `UnprocessableEntity`) and preserves Zod's type inference.

The `formValidate` and `formAsyncValidate` methods automatically determine the first error field and include it in the `scrollTo` property, enabling automatic scroll-to-error functionality in forms.
