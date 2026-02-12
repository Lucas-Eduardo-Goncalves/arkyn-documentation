# decodeRequestBody

The `decodeRequestBody` function is a utility for parsing incoming HTTP request bodies into JavaScript objects. It automatically detects and handles both JSON and URL-encoded form data formats, providing a unified interface for request body extraction.

## Import

```ts
import { decodeRequestBody } from "@arkyn/server";
```

## Parameters

The function accepts the following parameter:

### `request` (required)

The incoming Web API Request object containing the body to decode.

**Type:** `Request`

## Usage example

The function returns a Promise that resolves to the decoded data as a JavaScript object.

**Type:** `Promise<any>`

```typescript
import { decodeRequestBody } from "@arkyn/server";

// In a request handler
async function handleRequest(request: Request) {
  const body = await decodeRequestBody(request);

  console.log(body);
  // Output: { name: "John", email: "john@example.com" }
}
```

## Parsing Order

The function attempts to parse the request body in the following order:

1. **JSON parsing:** First tries to parse the body as JSON using `JSON.parse()`.

2. **URL-encoded form data:** If JSON parsing fails, checks if the body contains `=` and attempts to parse it as URL-encoded form data using `URLSearchParams`.

3. **Error handling:** If both parsing attempts fail, throws a `BadRequest` error.

## Errors

The function may throw errors in the following scenarios:

**`BadRequest` - Invalid URLSearchParams format**

Thrown when the body is not valid JSON and doesn't contain `=` characters (indicating it's not URL-encoded form data).

**`BadRequest` - Failed to extract data from request**

Thrown when both JSON and URL-encoded parsing fail.

```typescript
try {
  const data = await decodeRequestBody(request);
} catch (error) {
  // BadRequest: Invalid URLSearchParams format
}
```

## Notes

The function reads the request body using `arrayBuffer()` and decodes it as UTF-8 text before attempting to parse. This approach ensures compatibility with various content encodings.

The request body can only be read once. After calling this function, the original request body stream will be consumed.

This function does not validate the parsed data structure. Consider using schema validation (e.g., Zod, Yup) after parsing to ensure the data matches expected types.

The function works with the standard Web API `Request` object, making it compatible with modern runtimes like Bun, Deno, and Cloudflare Workers.

Common use cases include API endpoint handlers, form submission processing, and webhook receivers.
