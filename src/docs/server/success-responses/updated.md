# Updated

The `Updated` class represents a successful HTTP response with status code 200. It is used to standardize "Updated" success responses, typically for PUT or PATCH operations that modify existing resources.

## Import

```ts
import { Updated } from "@arkyn/server";
```

## Constructor

- `message` (required): A message describing the update status.
- `body` (optional): The response body to include in the HTTP response, which can be any serializable data. This is useful for returning the updated resource or additional information to the client.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON response.

## Usage example

```typescript
import { Updated } from "@arkyn/server";

// Basic usage - return the response
const response = new Updated("User updated successfully");
return response.toResponse();

// With updated resource in body
const updatedUser = { id: "123", name: "John Doe", email: "john@example.com" };
return new Updated("Profile updated", updatedUser).toResponse();

// With additional data (e.g., closeModal flag for frontend)
return new Updated("Settings saved successfully", {
  closeModal: true,
  user: { id: "123", preferences: { theme: "dark" } },
}).toJson();
```

## Response structure

The response body contains the data passed to the constructor:

```json
{
  "closeModal": true,
  "user": {
    "id": "123",
    "preferences": {
      "theme": "dark"
    }
  }
}
```

## Notes

When instantiated, this class automatically emits a debug log to the console showing the file and function where it was created. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `body` parameter is optional. If not provided, the response body will be `undefined`.

While `Updated` and `Success` both return status 200, using `Updated` makes your code more semantic and helps distinguish update operations from general success responses in debug logs.
