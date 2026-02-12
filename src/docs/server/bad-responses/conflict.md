# Conflict

The `Conflict` class represents an HTTP error response with status code 409. It is used to standardize "Conflict" error responses, typically when a request conflicts with the current state of a resource.

## Import

```ts
import { Conflict } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining the conflict cause.
- `cause` (optional): Additional information about the conflict cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { Conflict } from "@arkyn/server";

// Basic usage - throw the error
throw new Conflict("Email already registered");

// With cause information
throw new Conflict("Resource version mismatch", {
  currentVersion: 5,
  requestedVersion: 3,
});

// Convert to Response object
const error = new Conflict("Username already taken");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 409,
  "message": "Email already registered"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Common use cases include duplicate entries, version conflicts, concurrent modification errors, and resource state conflicts.
