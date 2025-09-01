# Created

The `Created` class is used to standardize the structure of a "Created" response, including the response body, headers, status, and status text.

## Import

```ts
import { Created } from "@arkyn/server";
```

## Generics

- **T**: The type of the response body.

## Constructor

- **body** (`T`): The response body to include in the HTTP response.
- **init** (`ResponseInit`, optional): Optional initialization object for customizing headers, status, and status text.

## Methods

### `toResponse()`

Converts the `Created` instance to a `Response` object with a JSON body.

- **Return**: `Response`
