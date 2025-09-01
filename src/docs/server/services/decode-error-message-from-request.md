# decodeErrorMessageFromRequest

The `decodeErrorMessageFromRequest` function attempts to extract a meaningful error message from `data` or `response` objects, checking various properties in a specific order. If no valid error message is found, it returns a default message: "Missing error message".

## Import

```ts
import { decodeErrorMessageFromRequest } from "@arkyn/server";
```

## Parameters

- **data** (`any`): The data object that may contain error information.
- **response** (`Response`): The response object that may contain a `statusText`.

## Return

- **(`string`)**: The decoded error message or a default message.
