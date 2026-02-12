# Forbidden

The `Forbidden` class represents an HTTP error response with status code 403. It is used to standardize "Forbidden" error responses, typically when the user is authenticated but lacks permission to access the requested resource.

## Import

```ts
import { Forbidden } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining the reason for access denial.
- `cause` (optional): Additional information about the error cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { Forbidden } from "@arkyn/server";

// Basic usage - throw the error
throw new Forbidden("You don't have permission to access this resource");

// With cause information
throw new Forbidden("Admin access required", {
  requiredRole: "admin",
  userRole: "member",
});

// Convert to Response object
const error = new Forbidden("Access denied to this feature");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 403,
  "message": "You don't have permission to access this resource"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Use `Forbidden` (403) when the user is authenticated but lacks permission. Use [Unauthorized](./unauthorized.md) (401) when the user is not authenticated at all.
