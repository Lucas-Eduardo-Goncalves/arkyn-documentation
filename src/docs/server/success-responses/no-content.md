# NoContent

The `NoContent` class represents a successful HTTP response with status code 204. It is used to standardize "No Content" responses, typically when an operation succeeds but there is no content to return in the response body.

## Import

```ts
import { NoContent } from "@arkyn/server";
```

## Constructor

- `message` (required): A message describing the operation status. This is included for logging and debugging purposes but is not sent in the response body since 204 responses must not include a body per HTTP specification.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with no body and `Content-Type: application/json` header.

## Usage example

```typescript
import { NoContent } from "@arkyn/server";

// Delete operation with no response body
const response = new NoContent("Resource deleted successfully");
return response.toResponse();

// Update operation that doesn't need to return data
return new NoContent("Settings updated").toResponse();

// Acknowledge operation
return new NoContent("Notification marked as read").toResponse();
```

## Response structure

The response has no body (`null`). Only the status code (204) and status text are returned.

## Notes

When instantiated, this class automatically emits a debug log to the console showing the file and function where it was created. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

Unlike other success responses, `NoContent` does not accept a `body` parameter and does not have a `toJson()` method, as 204 responses must not include a response body per HTTP specification.

Common use cases include DELETE operations, acknowledgment endpoints, toggle operations, and any action where success can be indicated by the status code alone.
