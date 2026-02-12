# errorHandler

The `errorHandler` function is a centralized utility for handling both success and error responses, converting them into standard HTTP Response objects. It serves as a unified response handler that simplifies API response management.

## Import

```ts
import { errorHandler } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `error` (required)

The error or response object to be handled. Can be a native Response object, a success response instance, an error response instance, or any other error object.

**Type:** `any`

## Usage example

The function returns a standard HTTP Response object with appropriate status code, headers, and body.

**Type:** `Response`

```typescript
import { errorHandler, Success, NotFound, Created } from "@arkyn/server";

async function getUser(id: string) {
  try {
    const user = await findUser(id);
    if (!user) throw new NotFound("User not found");
    throw new Success("User found", user);
  } catch (error) {
    return errorHandler(error);
  }
}
```

## Notes

This pattern of throwing success responses may seem unconventional, but it provides a clean, unified way to handle all exit points in a function through a single catch block.

The `errorHandler` function ensures consistent response formatting across your entire API, making it easier to maintain and debug.

For unexpected errors (those not matching any known response type), the original error is passed to `ServerError` as additional context, which can be useful for logging and debugging.

Common use cases include API route handlers, middleware error handling, and centralized response formatting.
