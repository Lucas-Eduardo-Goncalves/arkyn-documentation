# Forbidden

The `Forbidden` class is used to standardize the structure of a "Forbidden" error response.

## Import

```ts
import { Forbidden } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining why access is forbidden.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `Forbidden` instance into a `Response` object with a JSON body.

- **Return**: `Response`

### `toJson()`

Converts the `Forbidden` instance into a `Response` object using the `Response.json` method.

- **Return**: `Response`
