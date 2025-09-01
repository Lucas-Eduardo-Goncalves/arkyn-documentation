# NoContent

The `NoContent` class is used to standardize the structure of a "No Content" response, including headers, status, and status text.

## Import

```ts
import { NoContent } from "@arkyn/server";
```

## Constructor

- **init**(`ResponseInit`, optional): Optional initialization object for customizing headers, status, and status text.

## Methods

### `toResponse()`

Converts the `NoContent` instance to a `Response` object.

- **Return**: `Response`
