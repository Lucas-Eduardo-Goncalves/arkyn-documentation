# Success

The `Success` class is used to standardize the structure of a "Success" response, including the response body, headers, status, and status text.

## Import

```ts
import { Success } from "@arkyn/server";
```

## Generics

- **T**: The type of the response body.

## Constructor

- **body** (`T`): The response body to include in the HTTP response.
- **init** (`ResponseInit`, optional): Optional initialization object for customizing headers, status, and status text.

## Methods

### `toResponse()`

Converts the `Success` instance to a `Response` object with a JSON body.

- **Return**: `Response`
