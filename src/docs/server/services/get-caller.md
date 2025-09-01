# getCaller

The `getCaller` function parses the stack trace to determine the file path and function name of the caller. It excludes stack trace entries related to the `@arkyn/server` package and attempts to resolve the file path relative to the project root directory.

## Import

```ts
import { getCaller } from "@arkyn/server";
```

## Returns

- **(`object`)**: An object containing:
- `functionName`: The name of the function that called the current function.
- `callerInfo`: The file path of the caller relative to the project root.
