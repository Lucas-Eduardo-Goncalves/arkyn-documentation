# UnprocessableEntity

The `UnprocessableEntity` class represents an HTTP error response with status code 422. It is used to standardize "Unprocessable Entity" error responses, typically for form validation errors where the request syntax is correct but the semantic content is invalid.

## Import

```ts
import { UnprocessableEntity } from "@arkyn/server";
```

## Constructor

Unlike other BadResponse classes, `UnprocessableEntity` takes an object with structured validation data:

- `data` (optional): Any additional data related to the error, such as metadata or instructions for the client.
- `fieldErrors` (optional): An object mapping field names to error messages, indicating specific validation issues with individual fields.
- `fields` (optional): An object containing the original field values that caused the validation errors, allowing clients to repopulate form fields.
- `message` (optional): A descriptive message explaining the validation error. Defaults to "Unprocessable entity" if not provided.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { UnprocessableEntity } from "@arkyn/server";

// Basic form validation error
throw new UnprocessableEntity({
  message: "Validation failed",
  fieldErrors: {
    email: "Invalid email format",
    password: "Password must be at least 8 characters",
  },
  fields: {
    email: "invalid-email",
    password: "123",
  },
});

// With additional data (e.g., scrollTo for auto-scroll to first error)
throw new UnprocessableEntity({
  message: "Please fix the form errors",
  fieldErrors: { name: "Name is required" },
  fields: { name: "" },
  data: { scrollTo: "name" },
});

// Convert to Response object
const error = new UnprocessableEntity({
  fieldErrors: { username: "Username already taken" },
});
return error.toResponse();
```

## Response structure

The response body includes the validation details:

```json
{
  "ok": false,
  "status": 422,
  "message": "Validation failed",
  "data": { "scrollTo": "name" },
  "fieldErrors": {
    "email": "Invalid email format",
    "password": "Password must be at least 8 characters"
  },
  "fields": {
    "email": "invalid-email",
    "password": "123"
  }
}
```

## Integration with SchemaValidator

This class is commonly thrown by `SchemaValidator.formValidate()` and `SchemaValidator.formAsyncValidate()`:

```typescript
import { SchemaValidator } from "@arkyn/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(1, "Name is required"),
});

const validator = new SchemaValidator(schema);

// formValidate throws UnprocessableEntity on validation failure
const data = validator.formValidate(formData, "Please fix the errors");
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `fields` property preserves the original input values, allowing forms to repopulate fields after a validation error.

The `data` property can include a `scrollTo` key with the first error field name, enabling automatic scroll-to-error functionality in the frontend.

Use `UnprocessableEntity` (422) for semantic validation errors. Use [BadRequest](./bad-request.md) (400) for malformed syntax or missing required parameters.
