# generateId

The `generateId` function generates a Universally Unique Identifier (UUID) and returns it in the requested format and type.

## Import

```ts
import { generateId } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`type`**

- **Type**: `"text" | "binary"`
- **Description**: The desired output type for the UUID.
- `"text"`: Returns the UUID as a string.
- `"binary"`: Returns the UUID as a `Uint8Array` in binary format. - **Required**: Yes
- **Default**: N/A

**`format`**

- **Type**: `"v4" | "v7"`
- **Description**: The version of the UUID to generate.
- `"v4"`: Generates a random UUID (version 4).
- `"v7"`: Generates a time-ordered UUID (version 7).
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns the generated UUID in the specified type and format:

- If `type` is `text`, returns a `string`.
- If `type` is `binary`, returns a `Uint8Array`.

## Errors

The function may generate the following error:

- `Error("Invalid type or format")`: If an invalid `type` or `format` is provided.

## Usage Example

### Generate a v4 UUID as Text

```javascript
import { generateId } from "./generateId";

const idTextV4 = generateId("text", "v4");
console.log(idTextV4); // Ex: "550e8400-e29b-41d4-a716-446655440000"
```

### Generate a v7 UUID as Binary

```javascript
import { generateId } from "./generateId";

const idBinaryV7 = generateId("binary", "v7");
console.log(idBinaryV7); // Output: Uint8Array([...])
```
