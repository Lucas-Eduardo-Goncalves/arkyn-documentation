# formParse

The `formParse` function is a utility for parsing form data (`formData`) against a Zod schema (`schema`). It returns an object indicating success or failure, along with the validated data or field errors.

## Import

```ts
import { formParse } from "@arkyn/server";
```

## Types

- `FormParseProps`: A tuple containing `formData` and `schema`.
- `FormParseReturnType`: The return type, which can be `SuccessResponse` or `ErrorResponse`.

## Return

- **`SuccessResponse`**: If the validation was successful. - `success`: `true`
- `data`: The validated data.
- **`ErrorResponse`**: If validation fails.
- `success`: `false`
- `fields`: The original fields.
- `fieldErrors`: The validation errors per field.
