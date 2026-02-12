# NotImplemented

The `NotImplemented` class represents an HTTP error response with status code 501. It is used to standardize "Not Implemented" error responses, typically when a requested feature or functionality has not been developed yet.

## Import

```ts
import { NotImplemented } from "@arkyn/server";
```

## Constructor

- `message` (required): A descriptive message explaining why the feature is not implemented.
- `cause` (optional): Additional information about the error cause, which can be any serializable data.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON error response.

## Usage example

```typescript
import { NotImplemented } from "@arkyn/server";

// Basic usage - throw the error
throw new NotImplemented("This feature is coming soon");

// With cause information
throw new NotImplemented("Payment method not supported yet", {
  requestedMethod: "crypto",
  availableMethods: ["credit_card", "pix"],
});

// Convert to Response object
const error = new NotImplemented("Export to PDF is not available");
return error.toResponse();

// Using toJson alternative
return error.toJson();
```

## Response structure

The response body follows a standardized structure:

```json
{
  "ok": false,
  "status": 501,
  "message": "This feature is coming soon"
}
```

## Notes

When thrown, this class automatically emits a debug log to the console showing the file and function where the error originated. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `cause` parameter is serialized to JSON and stored for debugging purposes but is not included in the response body sent to clients.

Common use cases include placeholder endpoints, planned features, unsupported HTTP methods, and functionality under development.
