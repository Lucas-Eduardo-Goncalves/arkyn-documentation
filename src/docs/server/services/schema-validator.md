# SchemaValidator

The `SchemaValidator` class provides a way to validate data against a Zod schema, with methods for different types of validation (safe, error-throwing, and form-specific).

## Import

```ts
import { SchemaValidator } from "@arkyn/server";
```

## Constructor

- **schema** (`Schema`): The Zod schema to use for validation.

## Methods

### `isValid(data: any)`

Checks if the data is valid according to the schema.

- **Return**: `boolean`

### `safeValidate(data: any)`

Validates the data and returns an object with the result, without throwing errors.

- **Return**: `z.SafeParseReturnType`

### `validate(data: any)`

Validates the data and throws a `ServerError` if validation fails.

- **Return**: The validated data.

### `formValidate(data: any, message?: string)`

Validates form data and throws an `UnprocessableEntity` if validation fails.

- **Return**: The validated data.
