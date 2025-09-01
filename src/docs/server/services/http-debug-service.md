# HttpDebugService

The `HttpDebugService` class is used to manage HTTP debug configuration and behavior. This service provides functionality to configure how the `getCaller` function identifies the actual caller in the stack trace by allowing specific files to be ignored during stack trace analysis.

## Import

```ts
import { HttpDebugService } from "@arkyn/server";
```

## Static Properties

### `ignoreFile`

- **Type**: `string | undefined`
- **Description**: The name of the file to ignore when analyzing the stack trace. When set, the `getCaller` function will skip stack frames containing this file name.

## Static Methods

### `setIgnoreFile(file: string)`

Sets the file name to be ignored during stack trace analysis. This method configures the debug service to skip specific files when determining the actual caller of a function. This is useful when you have adapter or wrapper functions that you want to be transparent in the debug output.

- **Parameters**:
  - `file` (`string`): The name of the file to ignore in stack traces (e.g., "httpAdapter.ts")

## Examples

```typescript
// Configure to ignore httpAdapter.ts in stack traces
HttpDebugService.setIgnoreFile("httpAdapter.ts");

// Now when httpDebug is called from within httpAdapter.ts,
// it will show the actual caller (e.g., cart.ts) instead
```

```typescript
// Ignore the HTTP adapter file so debug shows the actual business logic caller
HttpDebugService.setIgnoreFile("httpAdapter.ts");
```

## Usage

This service is particularly useful when:

- You have wrapper or adapter functions that should be transparent in debug output
- You want to see the actual business logic caller instead of intermediate layers
- You need to filter out infrastructure code from debug traces
- You're building framework-like functionality that should not appear in user debug logs
