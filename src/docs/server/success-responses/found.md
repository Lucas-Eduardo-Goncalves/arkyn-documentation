# Found

The `Found` class is used to create a standardized HTTP response with a 302 (Found) status, including optional headers and a response body.

## Import

```ts
import { Found } from "@arkyn/server";
```

## Generics

- **T**: The response body type.

## Constructor

- **body** (`T`): The response body.
- **init** (`ResponseInit`, optional): Optional initialization object for setting headers, status, and status text.

## Methods

### `toResponse()`

Converts the `Found` instance to a `Response` object.

- **Return**: `Response`
