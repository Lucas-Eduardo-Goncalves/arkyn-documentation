# BadRequest

The `BadRequest` class represents an HTTP error response with status code 400. It is used to standardize "Bad Request" error responses, typically when the client sends malformed or invalid data.

## Import

```ts
import { BadRequest } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining the error cause.
- `cause` (optional): Additional information about the error cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { BadRequest } from "@arkyn/server";

// Basic usage - throw the error
throw new BadRequest("Invalid request parameters");

// With cause information
throw new BadRequest("Validation failed", {
  field: "email",
  reason: "Invalid format",
});

// Convert to Response object
const error = new BadRequest("Missing required field: name");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 400,
  "message": "Invalid request parameters"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Common use cases include invalid input data, missing required fields, malformed JSON, and client-side validation errors.
