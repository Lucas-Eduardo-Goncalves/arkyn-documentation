# NotImplemented

The `NotImplemented` class is used to standardize the structure of a "Not Implemented" error response.

## Import

```ts
import { NotImplemented } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining why the functionality is not implemented.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `NotImplemented` instance into a `Response` object with a JSON body.

- **Return**: `Response`
