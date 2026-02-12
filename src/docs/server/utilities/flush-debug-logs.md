# flushDebugLogs

The `flushDebugLogs` function is a utility for outputting debug logs to the console with colored output in development mode. This function is particularly useful for debugging and monitoring application behavior during development, providing visually distinct log entries with customizable color schemes.

## Import

```ts
import { flushDebugLogs } from "@arkyn/server";
```

## Parameters

The function accepts a configuration object with the following properties:

### `name` (required)

The name or label to display before each log entry. This appears inside square brackets and is colored according to the specified scheme. Useful for categorizing logs by module, service, or operation type.

**Type:** `string`

### `scheme` (required)

The color scheme for the name tag. Each color typically represents a different log level or category.

**Type:** `"yellow" | "cyan" | "red" | "green"`

### `debugs` (required)

An array of debug messages to be logged. Each message will be output on a separate line, prefixed with the colored name tag.

**Type:** `string[]`

## Usage example

The function outputs each debug message on a new line with a colored prefix. Logs are only displayed in development mode or when `DEBUG_MODE` is enabled.

```typescript
import { flushDebugLogs } from "@arkyn/server";

// Log API request information
flushDebugLogs({
  name: "API",
  scheme: "cyan",
  debugs: ["POST /api/users", "Status: 201", "Response time: 45ms"],
});
// Output:
// [API] POST /api/users
// [API] Status: 201
// [API] Response time: 45ms
```

## Environment configuration

The function only outputs logs when one of the following conditions is met:

- `NODE_ENV` is set to `development`
- `DEBUG_MODE` environment variable is set to `true`

```typescript
// Logs will be displayed when:
// - NODE_ENV=development
// - DEBUG_MODE=true

// Logs will NOT be displayed when:
// - NODE_ENV=production (without DEBUG_MODE=true)
// - NODE_ENV=test (without DEBUG_MODE=true)
```

## Notes

The function uses ANSI escape codes for terminal coloring. These colors are supported in most modern terminal emulators but may not render correctly in all environments.

Each debug message is automatically trimmed of leading and trailing whitespace before being logged.

The output includes a leading newline character to visually separate debug blocks from other console output.

In production environments, this function acts as a no-op, ensuring no debug logs leak into production output unless explicitly enabled via `DEBUG_MODE`.

The function returns `void` and does not throw any errors, making it safe to use in any context without error handling.
