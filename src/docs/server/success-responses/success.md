# Success

The `Success` class represents a successful HTTP response with status code 200. It is used to standardize "OK" success responses, typically for GET requests or operations that return data.

## Import

```ts
import { Success } from "@arkyn/server";
```

## Constructor

- `message` (required): A message describing the operation status.
- `body` (optional): The response body to include in the HTTP response, which can be any serializable data. This is useful for returning data to the client or providing additional information about the successful operation.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON response.

## Usage example

```typescript
import { Success } from "@arkyn/server";

// Basic usage - return the response
const response = new Success("Operation completed");
return response.toResponse();

// With response body
const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
];
return new Success("Users retrieved successfully", users).toResponse();

// With additional data (e.g., closeModal flag for frontend)
return new Success("Settings saved", {
  closeModal: true,
  settings: { theme: "dark", language: "en" },
}).toJson();
```

## Response structure

The response body contains the data passed to the constructor:

```json
{
  "closeModal": true,
  "settings": {
    "theme": "dark",
    "language": "en"
  }
}
```

## Notes

When instantiated, this class automatically emits a debug log to the console showing the file and function where it was created. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `body` parameter is optional. If not provided, the response body will be `undefined`.

Common use cases include GET requests returning data, successful form submissions, and any operation that completes successfully with or without returning data.
