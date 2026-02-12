# Unauthorized

The `Unauthorized` class represents an HTTP error response with status code 401. It is used to standardize "Unauthorized" error responses, typically when the user is not authenticated or the authentication credentials are invalid.

## Import

```ts
import { Unauthorized } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining why the request is unauthorized.
- `cause` (optional): Additional information about the error cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { Unauthorized } from "@arkyn/server";

// Basic usage - throw the error
throw new Unauthorized("Authentication required");

// With cause information
throw new Unauthorized("Invalid token", {
  tokenType: "JWT",
  reason: "Token expired",
});

// Convert to Response object
const error = new Unauthorized("Please log in to continue");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 401,
  "message": "Authentication required"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Use `Unauthorized` (401) when the user is not authenticated. Use [Forbidden](./forbidden.md) (403) when the user is authenticated but lacks permission to access the resource.
