# NotFound

The `NotFound` class is used to standardize the structure of a "Not Found" error response.

## Import

```ts
import { NotFound } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining why the resource was not found.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `NotFound` instance into a `Response` object with a JSON body.

- **Return**: `Response`

### `toJson()`

Converts the `NotFound` instance into a `Response` object using the `Response.json` method.

- **Return**: `Response`
