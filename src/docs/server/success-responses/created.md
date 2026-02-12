# Created

The `Created` class represents a successful HTTP response with status code 201. It is used to standardize "Created" success responses, typically when a new resource has been successfully created.

## Import

```ts
import { Created } from "@arkyn/server";
```

## Constructor

- `message` (required): A message describing the creation status.
- `body` (optional): The response body to include in the HTTP response, which can be any serializable data. This is useful for returning the created resource or additional information to the client.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON response.

## Usage example

```typescript
import { Created } from "@arkyn/server";

// Basic usage - return the response
const response = new Created("User created successfully");
return response.toResponse();

// With response body
const newUser = { id: "123", name: "John", email: "john@example.com" };
return new Created("User created successfully", newUser).toResponse();

// With additional data (e.g., closeModal flag for frontend)
return new Created("Product added to catalog", {
  closeModal: true,
  product: { id: "456", name: "New Product" },
}).toJson();
```

## Response structure

The response body contains the data passed to the constructor:

```json
{
  "closeModal": true,
  "product": {
    "id": "456",
    "name": "New Product"
  }
}
```

## Notes

When instantiated, this class automatically emits a debug log to the console showing the file and function where it was created. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `body` parameter is optional. If not provided, the response body will be `undefined`.

Common use cases include successful resource creation (users, products, orders), successful registration, and any POST operation that creates new data.
