# ApiService

The `ApiService` class is used to create an instance that manages HTTP requests, allowing the configuration of a base URL, headers, and authorization token to be used in all calls.

## Import

```ts
import { ApiService } from "@arkyn/server";
```

## Constructor

- **props** (`ApiServiceConstructorProps`): The configuration properties for the API instance.
  - `baseUrl` (`string`): The base URL for the API.
  - `baseHeaders` (`HeadersInit`, optional): Base headers to include in all requests.
  - `baseToken` (`string | null`, optional): Base token for authorization.

## Request Methods

The `ApiService` provides methods for the most common HTTP verbs. All methods return a `Promise` that resolves to an `ApiResponseDTO` object.

### `GET`

Sends a GET request to the specified route.

- **Parameters**:
  - `route` (`string`): The API route.
  - `data` (`ApiRequestDataWithoutBodyProps`, optional): Request data, including `headers` and `token`.

### `POST`

Sends a POST request to the specified route.

- **Parameters**:
  - `route` (`string`): The API route.
  - `data` (`ApiRequestDataWithBodyProps`, optional): Request data, including `body`, `headers`, and `token`.

### `PUT`

Sends a PUT request to the specified route.

- **Parameters**:
  - `route` (`string`): The API route.
  - `data` (`ApiRequestDataWithBodyProps`, optional): Request data, including `body`, `headers`, and `token`.

### `PATCH`

Sends a PATCH request to the specified route.

- **Parameters**:
  - `route` (`string`): The API route.
  - `data` (`ApiRequestDataWithBodyProps`, optional): Request data, including `body`, `headers`, and `token`.

### `DELETE`

Sends a DELETE request to the specified route.

- **Parameters**:
  - `route` (`string`): The API route.
  - `data` (`ApiRequestDataWithBodyProps`, optional): Request data, including `body`, `headers`, and `token`.

## Internal Operation and Return Pattern

Each request method (`GET`, `POST`, etc.) of the `ApiService` uses a corresponding helper function (`getRequest`, `postRequest`, etc.). These functions, in turn, are wrappers for the central `makeRequest` function, which is responsible for executing the `fetch` call and standardizing the response.

The `makeRequest` function performs the following actions:

1.  Configures the `fetch` request with the correct method, URL, headers, and body.
2.  Sets the `Content-Type` to `application/json` and serializes the request body.
3.  Logs the request and response details for debugging purposes using `arkynLogRequest`.
4.  Catches network errors or request failures.
5.  Returns a standardized `ApiResponseDTO` object.

### Logging with `arkynLogRequest`

The `makeRequest` function uses `arkynLogRequest` to send detailed data about each HTTP request to a centralized logging service. This is useful for monitoring and debugging in production environments.

`arkynLogRequest` performs the following actions:

1.  **Gets Configuration**: Retrieves the log API URL and user token from `ArkynLogService`. If the configuration is not available, the function does nothing.
2.  **Ignores Development Environment**: The function does not run in the development environment (`process.env.NODE_ENV === "development"`) to avoid sending unnecessary logs.
3.  **Collects and Sends Data**: Assembles an object with detailed request information and sends it via `POST` to the logging API. The collected data includes:
    - URL, status, method, and protocol (HTTP/HTTPS).
    - Response time (`elapsedTime`).
    - Request and response headers and body.
    - Query parameters (`queryParams`).

This functionality allows for complete tracking of each request's lifecycle, making it easier to identify problems and analyze performance.

### The `ApiResponseDTO` object

All request methods return a `Promise` that resolves with an `ApiResponseDTO<T>` object, which has the following structure:

- **`success`** (`boolean`): `true` if the request was successful (HTTP status 2xx), `false` otherwise.
- **`status`** (`number`): The HTTP status code of the response.
- **`message`** (`string`): A descriptive message about the result of the request.
- **`response`** (`T | null`): The response data, usually in JSON format. It is `null` if the response has no body or if a parsing error occurs.
- **`cause`** (`any | null`): Additional information about the error, if any.

### Example flow

1.  `api.PATCH("/users/1", { body: { name: "John" } })` is called.
2.  The `PATCH` method of `ApiService` calls `patchRequest`.
3.  `patchRequest` calls `makeRequest` with the "PATCH" method.
4.  `makeRequest` executes the `fetch` request and returns the `ApiResponseDTO`.

```js
// Example of use
const api = new ApiService({ baseUrl: "https://api.example.com" });

async function updateUser() {
  const result = await api.PATCH("/users/1", {
    body: { name: "Jane Doe" },
  });

  if (result.success) {
    console.log(result.message, result.response);
  } else {
    console.error(`Error ${result.status}: ${result.message}`);
  }
}
```
