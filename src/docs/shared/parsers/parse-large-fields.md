# parseLargeFields

The `parseLargeFields` function is a utility for truncating large string fields in JSON data to a specified maximum length. This function is particularly useful for logging, debugging, or displaying JSON data where extremely long string values might cause performance issues or clutter the output.

## Import

```ts
import { parseLargeFields } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `jsonString` (required)

The JSON string to process. This should be a valid JSON string that can be parsed into a JavaScript object or array. The function will traverse the entire structure recursively to find and truncate long string values.

**Type:** `string`

### `maxLength` (optional)

The maximum allowed length for string fields. Any string field that exceeds this length will be replaced with a message indicating the original length of the field. This helps identify truncated fields while keeping the output manageable.

**Type:** `number`  
**Default:** `1000`

## Return

The function returns a JSON string with large string fields truncated. Truncated fields are replaced with the message "To large information: field as X characters", where X is the original length of the string.

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid JSON string:** An error is thrown when the input string cannot be parsed as valid JSON. This includes malformed JSON such as missing quotes, trailing commas, unclosed brackets, or invalid syntax.

## Notes

The function uses a recursive approach to traverse nested objects and arrays, ensuring that all string fields at any depth are checked and truncated if necessary.

Non-string values (numbers, booleans, null, etc.) are preserved as-is and are not affected by the truncation logic.

The truncation message includes the original character count, which can be useful for determining if you need to adjust the `maxLength` parameter or investigate specific fields.

Empty strings and strings shorter than or equal to `maxLength` are preserved unchanged.

The function works with complex nested structures including arrays of objects, objects with nested objects, and mixed data types.

## Usage Examples

### Truncate a simple JSON string

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "John",
  description: "A very long description that exceeds the maximum length and needs to be truncated for display purposes"
});

const result = parseLargeFields(json, 50);

console.log(result);
// Output: '{"name":"John","description":"To large information: field as 108 characters"}'
```

### Truncate nested JSON structures

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "John",
  description: "A very long description that exceeds the maximum length...",
  nested: {
    details: "Another long string that needs truncation because it contains too much information."
  }
});

const result = parseLargeFields(json, 50);

console.log(result);
// Output: '{"name":"John","description":"To large information: field as 57 characters","nested":{"details":"To large information: field as 85 characters"}}'
```

### Use default max length

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "John",
  bio: "Short bio"
});

const result = parseLargeFields(json);

console.log(result);
// Output: '{"name":"John","bio":"Short bio"}'
```

### Truncate arrays with long strings

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  items: [
    "Short item",
    "This is a very long item that will be truncated because it exceeds the maximum allowed length",
    "Another short item"
  ]
});

const result = parseLargeFields(json, 30);

console.log(result);
// Output: '{"items":["Short item","To large information: field as 95 characters","Another short item"]}'
```

### Handle mixed data types

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "John",
  age: 30,
  active: true,
  description: "A very long description that will be truncated",
  metadata: null
});

const result = parseLargeFields(json, 20);

console.log(result);
// Output: '{"name":"John","age":30,"active":true,"description":"To large information: field as 46 characters","metadata":null}'
```

### Handle empty strings

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "",
  description: "Short"
});

const result = parseLargeFields(json, 50);

console.log(result);
// Output: '{"name":"","description":"Short"}'
```

### Handle invalid JSON

```typescript
import { parseLargeFields } from "@arkyn/shared";

try {
  const result = parseLargeFields("{ invalid json }", 50);
  console.log(result);
} catch (error) {
  console.error(error);
  // Output: Error: Invalid JSON string
}
```

### Truncate deeply nested structures

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  level1: {
    level2: {
      level3: {
        data: "This is a very long string nested deep in the structure that needs truncation"
      }
    }
  }
});

const result = parseLargeFields(json, 30);

console.log(result);
// Output: '{"level1":{"level2":{"level3":{"data":"To large information: field as 78 characters"}}}}'
```

### Use for logging large API responses

```typescript
import { parseLargeFields } from "@arkyn/shared";

const apiResponse = JSON.stringify({
  status: "success",
  data: {
    user: {
      name: "John Doe",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  }
});

const truncated = parseLargeFields(apiResponse, 100);
console.log(truncated);
// Truncates the long JWT token while preserving other fields
```

### Configure different max lengths

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  shortField: "This is short",
  mediumField: "This is a medium length field with some content",
  longField: "This is a very long field with lots and lots of content that will definitely be truncated"
});

const result1 = parseLargeFields(json, 20);
const result2 = parseLargeFields(json, 50);
const result3 = parseLargeFields(json, 100);

console.log(result1); // Truncates medium and long fields
console.log(result2); // Truncates only long field
console.log(result3); // No truncation
```
