# BadGateway

The `BadGateway` class is used to standardize the structure of a "Bad Gateway" error response, including the response body, headers, status, and status text.

## Import

```ts
import { BadGateway } from "@arkyn/server";
```

## Constructor

- **message** (`string`): A descriptive message explaining the cause of the error.
- **cause** (`any`, optional): Additional information about the cause of the error.

## Methods

### `toResponse()`

Converts the `BadGateway` instance into a `Response` object with a JSON body. This method ensures that the response has the appropriate headers, status, and status text.

- **Return**: `Response`

### `toJson()`

Converts the `BadGateway` instance into a `Response` object using the `Response.json` method. This method is an alternative to `toResponse` for generating JSON error responses.

- **Return**: `Response`
