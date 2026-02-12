# ServerError

The `ServerError` class represents an HTTP error response with status code 500. It is used to standardize "Internal Server Error" responses, typically when an unexpected error occurs on the server side.

## Import

```ts
import { ServerError } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining the server error cause.
- `cause` (optional): Additional information about the error cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { ServerError } from "@arkyn/server";

// Basic usage - throw the error
throw new ServerError("An unexpected error occurred");

// With cause information
throw new ServerError("Database operation failed", {
  operation: "insert",
  table: "users",
  originalError: "Connection lost",
});

// Convert to Response object
const error = new ServerError("Failed to process request");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 500,
  "message": "An unexpected error occurred"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Common use cases include unhandled exceptions, database failures, external service errors, and unexpected runtime errors.
