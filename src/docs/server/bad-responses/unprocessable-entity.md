# UnprocessableEntity

The `UnprocessableEntity` class is used to standardize the structure of an "Unprocessable Entity" error response.

## Import

```ts
import { UnprocessableEntity } from "@arkyn/server";
```

## Constructor

- **props** (`UnprocessableEntityProps`): An object containing details about the error.
  - `data` (`any`, optional): Additional data related to the error.
  - `fieldErrors` (`Record<string, string>`, optional): A record of field-specific error messages.
  - `fields` (`Record<string, string>`, optional): A record of field values that caused the error.
  - `message` (`string`, optional): A descriptive message explaining the error.
