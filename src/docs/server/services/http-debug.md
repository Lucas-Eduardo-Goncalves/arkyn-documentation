# httpDebug

The `httpDebug` function logs detailed information to the console, but only when the application is in development mode (`NODE_ENV === "development"`) or when the `SHOW_ERRORS_IN_CONSOLE` environment variable is set to `true`.

## Import

```ts
import { httpDebug } from "@arkyn/server";
```

## Parameters

- **name** (`string`): A name or context for the debug log.
- **body** (`any`): The main content or data to be logged.
- **cause** (`any`, optional): Additional information or the cause of the error to be logged.
