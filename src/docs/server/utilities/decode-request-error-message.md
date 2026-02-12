# decodeRequestErrorMessage

The `decodeRequestErrorMessage` function is a utility for extracting meaningful error messages from HTTP response data. It intelligently checks multiple common error message locations and returns the first valid message found, or a default fallback message.

## Import

```ts
import { decodeRequestErrorMessage } from "@arkyn/server";
```

## Parameters

The function accepts the following parameters:

### `data` (required)

The data object that may contain error information. This is typically the parsed JSON body from an error response.

**Type:** `any`

### `response` (required)

The Web API Response object that may contain a `statusText` property representing the HTTP status text.

**Type:** `Response`

## Usage example

The function returns a string representing the decoded error message.

**Type:** `string`

```typescript
import { decodeRequestErrorMessage } from "@arkyn/server";

// Example with data.message
const data = { message: "User not found" };
const message1 = decodeRequestErrorMessage(data, response);
console.log(message1);
// Output: "User not found"
```

## Extraction order

The function checks for error messages in the following order and returns the first valid string found:

1. `data.message`: Direct message property on the data
2. `data.error`: Error property as a string
3. `data.error.message`: Nested message inside an error object
4. `response.statusText`: HTTP status text from the Response object
5. Default: If none of the above are valid strings, returns `"Missing error message"`

## Notes

This function is designed to handle the variety of error response formats commonly used by different APIs:

- **Express/Node.js APIs** often use `{ message: "..." }`
- **Some REST APIs** use `{ error: "..." }`
- **Structured error responses** often use `{ error: { message: "..." } }`

The function performs type checking to ensure each property is a string before returning it, preventing unexpected object or array values from being returned.

If all checks fail, the function returns the default message `"Missing error message"` to ensure a consistent return type.

Common use cases include error handling in API clients, displaying user-friendly error messages, and logging error responses.
