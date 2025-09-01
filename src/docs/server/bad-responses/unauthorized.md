# Unauthorized

The `Unauthorized` class is used to standardize the structure of an "Unauthorized" error response.

## Import

```ts
import { Unauthorized } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining why the request is unauthorized.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `Unauthorized` instance into a `Response` object with a JSON body.

- **Return**: `Response`

### `toJson()`

Converts the `Unauthorized` instance into a `Response` object using the `Response.json` method.

- **Return**: `Response`
