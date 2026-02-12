# getScopedParams

The `getScopedParams` function is a utility for extracting and filtering query parameters from a request URL based on a scope prefix. This is useful when you need to namespace query parameters to avoid conflicts between different features or components.

## Import

```ts
import { getScopedParams } from "@arkyn/server";
```

## Parameters

The function accepts the following parameters:

### `request` (required)

The incoming request object containing the URL to extract parameters from.

**Type:** `Request`

### `scope` (optional)

A string representing the scope prefix for filtering query parameters. When provided, only parameters with keys starting with `scope:` are included, and the prefix is removed from the keys.

**Type:** `string`  
**Default:** `""` (returns all parameters)

## Usage example

The function returns a `URLSearchParams` object containing the filtered query parameters.

```typescript
import { getScopedParams } from "@arkyn/server";

// Without scope - returns all parameters
const request1 = new Request("https://example.com?page=1&limit=10&search=test");
const params1 = getScopedParams(request1);
console.log(params1.toString());
// Output: "page=1&limit=10&search=test"

// With scope - returns only scoped parameters (prefix removed)
const request2 = new Request(
  "https://example.com?filter:status=active&filter:type=user&page=1",
);
const params2 = getScopedParams(request2, "filter");
console.log(params2.toString());
// Output: "status=active&type=user"

// Accessing individual values
console.log(params2.get("status")); // "active"
console.log(params2.get("type")); // "user"
```

## Notes

When a scope is provided, only query parameters with keys matching the pattern `scope:key` are included in the result. The scope prefix and colon are automatically stripped from the returned keys.

Parameters that don't match the scope pattern are excluded from the result, making it easy to isolate specific groups of parameters.

If no scope is provided (or an empty string), the function returns all query parameters unchanged.

Common use cases include separating filter parameters from pagination, handling multi-form pages, or namespacing parameters for different UI components.
