# Updated

The `Updated` class is used to standardize the structure of an "Updated" response, including the response body, headers, status, and status text.

## Import

```ts
import { Updated } from "@arkyn/server";
```

## Generics

- **T**: The type of the response body.

## Constructor

- **body** (`T`): The response body to include in the HTTP response.
- **init** (`ResponseInit`, optional): Optional initialization object for customizing headers, status, and status text.

## Methods

### `toResponse()`

Converts the `Updated` instance to a `Response` object with a JSON body.

- **Returns**: `Response`

### `toJson()`

Converts the `Updated` instance to a `Response` object using the `Response.json` method.

- **Returns**: `Response`
