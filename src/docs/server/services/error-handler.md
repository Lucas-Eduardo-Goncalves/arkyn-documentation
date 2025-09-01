# errorHandler

The `errorHandler` function receives an error object and determines its type to return the corresponding HTTP response. It supports success and error response types, converting them to a standardized format using the `toResponse` method when applicable.

## Import

```ts
import { errorHandler } from "@arkyn/server";
```

## Parameters

- **error** (`any`): The error object to handle.

## Returns

- **(`Response`)**: The corresponding HTTP response object if the error matches a known type, or a generic `ServerError`.
