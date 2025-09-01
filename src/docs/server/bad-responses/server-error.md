# ServerError

The `ServerError` class is used to standardize the structure of a "Server Error" response.

## Import

```ts
import { ServerError } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining the cause of the server error.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `ServerError` instance into a `Response` object with a JSON body.

- **Return**: `Response`
