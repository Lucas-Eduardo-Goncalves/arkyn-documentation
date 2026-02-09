# generateId

The `generateId` function is a utility for generating unique identifiers (UUIDs) in different versions and output formats. This function supports both UUID v4 (random) and UUID v7 (time-ordered) formats, and can return the result as either a text string or binary data.

## Import

```ts
import { generateId } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `type` (required)

Specifies the output format of the generated UUID. The function can return the UUID in two different formats:

- `"text"` returns the UUID as a standard hyphenated string (e.g., "550e8400-e29b-41d4-a716-446655440000")
- `"binary"` returns the UUID as a `Uint8Array` containing the raw binary representation, which is more compact and efficient for storage or transmission

**Type:** `"text" | "binary"`

### `format` (required)

Specifies which UUID version to generate. The function supports two UUID versions:

- `"v4"` generates a random UUID (version 4) where all bits except the version and variant bits are randomly generated, providing excellent uniqueness with minimal collision probability
- `"v7"` generates a time-ordered UUID (version 7) that includes a timestamp component, making it sortable by creation time and useful for databases and time-series data

**Type:** `"v4" | "v7"`

## Usage example

The function returns a UUID in the specified format:

- When `type` is `"text"`, returns a string in the standard UUID format with hyphens (e.g., "550e8400-e29b-41d4-a716-446655440000")
- When `type` is `"binary"`, returns a `Uint8Array` of 16 bytes representing the UUID in binary format

**Type:** `string | Uint8Array`

```typescript
import { generateId } from "@arkyn/shared";

const id = generateId("text", "v4");

console.log(id);
// Output: "550e8400-e29b-41d4-a716-446655440000" (example)
```

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid type or format:** An error is thrown when an invalid combination of `type` or `format` parameters is provided. This should not occur in TypeScript due to type checking, but can happen if invalid values are passed at runtime.

```typescript
import { generateId } from "@arkyn/shared";

try {
  const id = generateId("invalid_type" as any, "v4");
} catch (error) {
  console.error(error);
  // Output: Error: Invalid type or format
}
```

## Notes

UUID v4 is completely random (except for version and variant bits) and is suitable for general-purpose unique identifier generation where temporal ordering is not required.

UUID v7 includes a timestamp component, making it naturally sortable by creation time. This is particularly useful for database primary keys and distributed systems where time-based ordering is beneficial.

The binary format is more efficient for storage and transmission, using exactly 16 bytes compared to 36 characters (72 bytes as UTF-16 or 36 bytes as UTF-8) for the text format.

The function uses the `uuid` library internally to generate standards-compliant UUIDs according to RFC 4122 (v4) and the draft specification for UUID v7.
