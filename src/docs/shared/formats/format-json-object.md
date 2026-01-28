# formatJsonObject

The `formatJsonObject` function is a utility for formatting JSON objects into human-readable strings with proper indentation, making it easier to visualize and debug complex data structures.

## Import

```ts
import { formatJsonObject } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `json` (required)

The JSON value to format. This can be any valid JavaScript value including objects, arrays, strings, numbers, booleans, or null. The function intelligently handles each data type to produce a properly formatted output.

**Type:** `any`

### `indentLevel` (required)

The current level of indentation to apply, starting from 0 for the root level. This parameter is used recursively to format nested structures with proper spacing. Each indentation level adds two spaces to the left margin.

**Type:** `number`

## Return

The function returns a formatted string representation of the JSON object with proper indentation and line breaks.

## Notes

The function uses a recursive approach to handle nested objects and arrays, ensuring that all levels of the data structure are properly formatted with consistent indentation.

Empty objects `{}` and empty arrays `[]` are displayed inline without line breaks or indentation to maintain readability and avoid unnecessary whitespace.

If the input is a string, the function attempts to parse it as JSON first. If parsing succeeds, it formats the parsed object; otherwise, it treats it as a regular string value and wraps it in quotes.

Primitive values (numbers, booleans, and null) are converted directly to their string representation without quotes, following standard JSON formatting rules.

The function always uses two spaces for each indentation level, which is a common convention for readable JSON formatting.

## Usage Examples

### Format a simple object

```typescript
import { formatJsonObject } from "@arkyn/shared";

const obj = { name: "John", age: 30 };
const formatted = formatJsonObject(obj, 0);

console.log(formatted);
// Output:
// {
//   "name": "John",
//   "age": 30
// }
```

### Format a nested object with arrays

```typescript
import { formatJsonObject } from "@arkyn/shared";

const obj = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    country: "USA"
  }
};
const formatted = formatJsonObject(obj, 0);

console.log(formatted);
// Output:
// {
//   "name": "John",
//   "age": 30,
//   "hobbies": [
//     "reading",
//     "gaming"
//   ],
//   "address": {
//     "city": "New York",
//     "country": "USA"
//   }
// }
```

### Format an array of objects

```typescript
import { formatJsonObject } from "@arkyn/shared";

const arr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const formatted = formatJsonObject(arr, 0);

console.log(formatted);
// Output:
// [
//   {
//     "id": 1,
//     "name": "Alice"
//   },
//   {
//     "id": 2,
//     "name": "Bob"
//   }
// ]
```

### Format an empty object

```typescript
import { formatJsonObject } from "@arkyn/shared";

const obj = {};
const formatted = formatJsonObject(obj, 0);

console.log(formatted);
// Output: "{}"
```

### Format an empty array

```typescript
import { formatJsonObject } from "@arkyn/shared";

const arr = [];
const formatted = formatJsonObject(arr, 0);

console.log(formatted);
// Output: "[]"
```

### Format a JSON string

```typescript
import { formatJsonObject } from "@arkyn/shared";

const jsonString = '{"name":"John","age":30}';
const formatted = formatJsonObject(jsonString, 0);

console.log(formatted);
// Output:
// {
//   "name": "John",
//   "age": 30
// }
```

### Format primitive values

```typescript
import { formatJsonObject } from "@arkyn/shared";

console.log(formatJsonObject(42, 0));
// Output: "42"

console.log(formatJsonObject(true, 0));
// Output: "true"

console.log(formatJsonObject(null, 0));
// Output: "null"

console.log(formatJsonObject("Hello", 0));
// Output: "Hello"
```

### Format with custom indentation level

```typescript
import { formatJsonObject } from "@arkyn/shared";

const obj = { name: "John", age: 30 };
const formatted = formatJsonObject(obj, 2);

console.log(formatted);
// Output:
//     {
//       "name": "John",
//       "age": 30
//     }
```
