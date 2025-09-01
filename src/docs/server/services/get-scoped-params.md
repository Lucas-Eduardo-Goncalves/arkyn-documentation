# getScopedParams

The `getScopedParams` function parses the URL of a `Request` and returns a `URLSearchParams` object. If a `scope` is provided, it extracts only the parameters that belong to that scope (prefixed with `scope[key]`).

## Import

```ts
import { getScopedParams } from "@arkyn/server";
```

## Parameters

- **request** (`Request`): The request object.
- **scope** (`string`, optional): The scope to filter the parameters.

## Return

- **(`URLSearchParams`)**: A `URLSearchParams` object containing the filtered parameters.
