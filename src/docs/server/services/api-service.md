# ApiService

The `ApiService` is a class that provides a simple and consistent interface for making HTTP requests to REST APIs. It supports all common HTTP methods (GET, POST, PUT, PATCH, DELETE), automatic header management, token-based authentication, and optional debug logging.

## Import

```ts
import { ApiService } from "@arkyn/server";
```

## Constructor

Creates a new ApiService instance with the provided configuration.

- `baseUrl` (required): The base URL for all API requests. This will be prepended to all endpoint paths.
- `baseHeaders` (optional): Default headers to include in every request. These can be overridden by request-specific headers.
- `baseToken` (optional): A default Bearer token for authorization. This can be overridden by request-specific tokens.
- `enableDebug` (optional): Enable debug logging for requests. When true, request details will be logged using `flushDebugLogs`. Default is false.

```typescript
const api = new ApiService({
  baseUrl: "https://api.example.com",
  baseHeaders: { "Content-Type": "application/json" },
  baseToken: "your-api-token",
  enableDebug: true,
});
```

## Methods

All methods return a Promise with the API response containing `status`, `message`, and `data`.

**`get(endpoint, data?)`** - Sends a GET request to the specified endpoint.

**`post(endpoint, data?)`** - Sends a POST request with an optional body.

**`put(endpoint, data?)`** - Sends a PUT request with an optional body.

**`patch(endpoint, data?)`** - Sends a PATCH request with an optional body.

**`delete(endpoint, data?)`** - Sends a DELETE request with an optional body.

### Request data options

For GET requests:

- `headers`: Additional headers for this request
- `token`: Bearer token (overrides `baseToken`)
- `urlParams`: Query parameters as key-value pairs

For POST, PUT, PATCH, DELETE requests:

- `body`: Request body (any serializable data)
- `headers`: Additional headers for this request
- `token`: Bearer token (overrides `baseToken`)
- `urlParams`: Query parameters as key-value pairs

## Usage example

```typescript
import { ApiService } from "@arkyn/server";

const api = new ApiService({
  baseUrl: "https://api.example.com",
  baseHeaders: { "Content-Type": "application/json" },
  enableDebug: process.env.NODE_ENV === "development",
});

// GET request with query parameters
const users = await api.get("/users", {
  urlParams: { page: "1", limit: "10" },
});

// GET request with custom token
const profile = await api.get("/me", {
  token: "user-specific-token",
});

// POST request with body
const newUser = await api.post("/users", {
  body: { name: "John", email: "john@example.com" },
});

// PUT request
const updatedUser = await api.put("/users/:userId", {
  body: { name: "John Doe" },
  urlParams: { userId: "123" },
});

// PATCH request
const patchedUser = await api.patch("/users/:userId", {
  body: { status: "active" },
  urlParams: { userId: "123" },
});

// DELETE request
const deleted = await api.delete("/users/:userId", {
  urlParams: { userId: "123" },
});

// Handling responses
if (users.status === 200) {
  console.log(users.data); // Response data
} else {
  console.log(users.message); // Error message
}
```

## Header priority

Headers are merged in the following order (later values override earlier ones):

1. `baseToken` (as `Authorization: Bearer {token}`)
2. `baseHeaders` (from constructor)
3. `headers` (from request data)
4. `token` (from request data, as `Authorization: Bearer {token}`)

## Debug output

When `enableDebug` is enabled, each request logs the following information:

- Base URL
- Endpoint
- HTTP method and response status
- Response message
- Headers (if present)
- Request body (if present)

Debug logs are output using `flushDebugLogs` with the "yellow" color scheme.

## Route variables

Replaces placeholders in the URL path (e.g., `/users/:userId` becomes `/users/123`)

Using route variables with `:param` syntax is optional, but recommended when integrating with [LogService](/docs/server/services/log-service). The log system generates logs based on URLs, so having a consistent base URL with variables as route parameters makes logs more readable and aggregatable.

```typescript
// Without route variables - each userId creates a different log entry
await api.get("/users/123");
await api.get("/users/456");
// Logs: GET /users/123, GET /users/456

// With route variables - logs are grouped by the base pattern
await api.get("/users/:userId", { urlParams: { userId: "123" } });
await api.get("/users/:userId", { urlParams: { userId: "456" } });
// Logs: GET /users/:userId (with userId as metadata)
```

## Notes

The service automatically prepends the `baseUrl` to all endpoint paths, so endpoints should start with `/`.

All methods are async and should be awaited. The response object always contains `status`, `message`, and `data` properties.

For more control over individual requests, you can use the underlying functions directly: `getRequest`, `postRequest`, `putRequest`, `patchRequest`, `deleteRequest`.
