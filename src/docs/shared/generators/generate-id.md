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

## Return

The function returns a UUID in the specified format:

- When `type` is `"text"`, returns a string in the standard UUID format with hyphens (e.g., "550e8400-e29b-41d4-a716-446655440000")
- When `type` is `"binary"`, returns a `Uint8Array` of 16 bytes representing the UUID in binary format

**Type:** `string | Uint8Array`

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid type or format:** An error is thrown when an invalid combination of `type` or `format` parameters is provided. This should not occur in TypeScript due to type checking, but can happen if invalid values are passed at runtime.

## Notes

UUID v4 is completely random (except for version and variant bits) and is suitable for general-purpose unique identifier generation where temporal ordering is not required.

UUID v7 includes a timestamp component, making it naturally sortable by creation time. This is particularly useful for database primary keys and distributed systems where time-based ordering is beneficial.

The binary format is more efficient for storage and transmission, using exactly 16 bytes compared to 36 characters (72 bytes as UTF-16 or 36 bytes as UTF-8) for the text format.

The function uses the `uuid` library internally to generate standards-compliant UUIDs according to RFC 4122 (v4) and the draft specification for UUID v7.

## Usage Examples

### Generate a version 4 UUID as text

```typescript
import { generateId } from "@arkyn/shared";

const id = generateId("text", "v4");

console.log(id);
// Output: "550e8400-e29b-41d4-a716-446655440000" (example)
```

### Generate a version 7 UUID as text

```typescript
import { generateId } from "@arkyn/shared";

const id = generateId("text", "v7");

console.log(id);
// Output: "018e3c5e-8c3a-7000-8000-000000000000" (example)
```

### Generate a version 4 UUID as binary

```typescript
import { generateId } from "@arkyn/shared";

const id = generateId("binary", "v4");

console.log(id);
// Output: Uint8Array(16) [85, 14, 132, 0, 226, 155, 65, 212, 167, 22, 68, 102, 85, 68, 0, 0]
```

### Generate a version 7 UUID as binary

```typescript
import { generateId } from "@arkyn/shared";

const id = generateId("binary", "v7");

console.log(id);
// Output: Uint8Array(16) [1, 142, 60, 94, 140, 58, 112, 0, 128, 0, 0, 0, 0, 0, 0, 0]
```

### Use in database entity

```typescript
import { generateId } from "@arkyn/shared";

interface User {
  id: string;
  name: string;
  createdAt: Date;
}

function createUser(name: string): User {
  return {
    id: generateId("text", "v7"), // Time-ordered for database efficiency
    name,
    createdAt: new Date(),
  };
}

const user = createUser("John Doe");
console.log(user);
// Output: { id: "018e3c5e-8c3a-7000-8000-000000000000", name: "John Doe", createdAt: ... }
```

### Generate multiple unique IDs

```typescript
import { generateId } from "@arkyn/shared";

const ids = Array.from({ length: 5 }, () => generateId("text", "v4"));

console.log(ids);
// Output: [
//   "550e8400-e29b-41d4-a716-446655440000",
//   "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
//   "7c9e6679-7425-40de-944b-e07fc1f90ae7",
//   "886313e1-3b8a-5372-9b90-0c9aee199e5d",
//   "987fbc97-4bed-5078-9f07-9141ba07c9f3"
// ]
```

### Convert binary UUID to text

```typescript
import { generateId } from "@arkyn/shared";

const binaryId = generateId("binary", "v4");
const textId = Array.from(binaryId)
  .map(byte => byte.toString(16).padStart(2, "0"))
  .join("")
  .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");

console.log(textId);
// Output: "550e8400-e29b-41d4-a716-446655440000"
```

### Use v7 for sortable IDs

```typescript
import { generateId } from "@arkyn/shared";

const id1 = generateId("text", "v7");
await new Promise(resolve => setTimeout(resolve, 10)); // Wait 10ms
const id2 = generateId("text", "v7");

console.log(id1 < id2);
// Output: true (v7 UUIDs are time-ordered)
```

### Store binary UUID efficiently

```typescript
import { generateId } from "@arkyn/shared";

const binaryId = generateId("binary", "v4");

// Binary format uses 16 bytes
console.log(binaryId.byteLength);
// Output: 16

// Text format uses 36 characters (36 bytes as UTF-8)
const textId = generateId("text", "v4");
console.log(textId.length);
// Output: 36
```
