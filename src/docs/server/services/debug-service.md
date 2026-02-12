# DebugService

The `DebugService` is a utility class for managing debug configuration and stack trace analysis. It provides functionality to identify the actual caller of a function by analyzing stack traces, with the ability to ignore specific wrapper or adapter files.

## Import

```ts
import { DebugService } from "@arkyn/server";
```

## Methods

**`setIgnoreFile(file)`** - Adds a file name to the ignore list for stack trace analysis.

**`clearIgnoreFiles()`** - Clears all configured ignore files, resetting the list.

**`getCaller()`** - Analyzes the stack trace and returns information about the actual caller.

## Usage example

```typescript
import { DebugService } from "@arkyn/server";

// Configure files to ignore in stack traces
// Useful when you have adapter/wrapper functions that should be transparent
DebugService.setIgnoreFile("httpAdapter.ts");
DebugService.setIgnoreFile("middleware.ts");

// Get caller information
const { functionName, callerInfo } = DebugService.getCaller();
console.log(`Called from: ${functionName} in ${callerInfo}`);
// Output: "Called from: createUser in src/services/userService.ts"

// Clear ignore configuration when needed
DebugService.clearIgnoreFiles();
```

## getCaller return structure

The `getCaller` method returns an object with:

- `functionName`: The name of the calling function, or `"Unknown function"` if it cannot be determined
- `callerInfo`: The file path relative to the project root, or `"Unknown caller"` if it cannot be determined

```typescript
const caller = DebugService.getCaller();
// {
//   functionName: "handleRequest",
//   callerInfo: "src/controllers/userController.ts"
// }
```

## Practical example

When using Arkyn's BadResponses (`BadRequest`, `BadGateway`, `NotFound`, etc.) or SuccessResponses (`Created`, `Updated`, `Success`), they automatically emit a console log showing the file and function where the error/success was thrown.

If you create an adapter that wraps these classes, the logs will always point to the adapter file instead of the actual business logic. To fix this, use `DebugService.setIgnoreFile()` to ignore the adapter file:

```typescript
// httpAdapter.ts
import {
  BadRequest,
  NotFound,
  ServerError,
  Created,
  Updated,
  Success,
  DebugService,
} from "@arkyn/server";

// Ignore this file in stack traces so logs show the actual caller
DebugService.setIgnoreFile("httpAdapter.ts");

class HttpAdapter {
  static badRequest(message: string, cause?: any) {
    throw new BadRequest(message, cause);
  }

  static notFound(message: string, cause?: any) {
    throw new NotFound(message, cause);
  }

  static serverError(message: string, cause?: any) {
    throw new ServerError(message, cause);
  }

  static created(message: string, body?: any) {
    return new Created({ closeModal: true, ...body }, { message }).toResponse();
  }

  static updated(message: string, body?: any) {
    return new Updated({ closeModal: true, ...body }, { message }).toResponse();
  }

  static success(message: string, body?: any) {
    return new Success({ closeModal: true, ...body }, { message }).toResponse();
  }
}

export { HttpAdapter };
```

```typescript
// createCustomerUseCase.ts
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class CreateCustomerUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.customerGateway.createCustomer(input, token);
    return HttpAdapter.created("Customer created successfully!");
  }
}
```

**Without `setIgnoreFile`:**

```
[Created] httpAdapter.ts -> created()
```

**With `setIgnoreFile("httpAdapter.ts")`:**

```
[Created] createCustomerUseCase.ts -> execute()
```

This way, the console logs correctly point to where your business logic actually called the adapter, making debugging much easier.

## Notes

The `getCaller` method automatically excludes stack frames from `node:internal` and `node_modules` directories.

File paths returned by `callerInfo` are resolved relative to `process.cwd()` (the project root).

Stack trace analysis may return `"Unknown function"` for anonymous functions or arrow functions without explicit names.

This service is used internally by Arkyn's logging and debugging utilities to provide accurate caller information.
