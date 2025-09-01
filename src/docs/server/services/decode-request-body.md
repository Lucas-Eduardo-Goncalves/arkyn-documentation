# decodeRequestBody

The `decodeRequestBody` function attempts to parse the request body in the following order:

1. Attempts to parse the body as JSON.
2. If JSON parsing fails, attempts to parse it as URL-encoded form data.
3. If both parsing attempts fail, logs the errors and returns an empty object.

## Import

```ts
import { decodeRequestBody } from "@arkyn/server";
```

## Parameters

- **req** (`Request`): The input request object containing the body to be decoded.

## Returns

- **(`Promise<any>`)**: A promise that resolves to the decoded data as a JavaScript object.

## Errors

- Logs errors to the console if the request body cannot be read or parsed.
