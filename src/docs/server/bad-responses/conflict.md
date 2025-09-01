# Conflict

The `Conflict` class is used to standardize the structure of a "Conflict" error response, including the response body, headers, status, and status text.

## Import

```ts
import { Conflict } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining the cause of the conflict.
- **cause** (`any`, optional): Additional information about the cause of the conflict.

## Methods

### `toResponse()`

Converts the `Conflict` instance into a `Response` object with a JSON body.

- **Returns**: `Response`

### `toJson()`

Converts the `Conflict` instance into a `Response` object using the `Response.json` method.

- **Returns**: `Response`
