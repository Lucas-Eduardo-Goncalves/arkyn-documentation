# Found

The `Found` class represents a successful HTTP response with status code 302. It is used to standardize "Found" responses, typically for temporary redirects where the resource has been temporarily moved to a different location.

## Import

```ts
import { Found } from "@arkyn/server";
```

## Constructor

- `message` (required): A message describing the redirect status.
- `body` (optional): The response body to include in the HTTP response, which can be any serializable data. This is useful for providing additional information to the client, such as the new location of the resource or instructions for the client on how to proceed.

## Methods

**`toResponse()`** - Converts the instance into a `Response` object with JSON body and `Content-Type: application/json` header.

**`toJson()`** - Alternative method using `Response.json()` for generating the JSON response.

## Usage example

```typescript
import { Found } from "@arkyn/server";

// Basic usage - return the response
const response = new Found("Resource temporarily moved");
return response.toResponse();

// With redirect location in body
return new Found("Redirecting to new location", {
  redirectUrl: "/new-location",
}).toResponse();

// Using toJson alternative
return new Found("Temporary redirect", {
  location: "https://example.com/temporary",
}).toJson();
```

## Response structure

The response body contains the data passed to the constructor:

```json
{
  "redirectUrl": "/new-location"
}
```

## Notes

When instantiated, this class automatically emits a debug log to the console showing the file and function where it was created. See [DebugService](../services/debug-service.md) to configure ignored files for accurate caller detection.

The `body` parameter is optional. If not provided, the response body will be `undefined`.

Common use cases include temporary redirects, A/B testing redirects, and maintenance mode redirects where the original URL should still be used in future requests.
