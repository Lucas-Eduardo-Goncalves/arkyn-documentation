# formatJsonString

The `formatJsonString` function is a utility for parsing and formatting JSON strings into human-readable format with proper indentation, making it easier to visualize and debug JSON data.

## Import

```ts
import { formatJsonString } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `jsonString` (required)

The JSON string to be formatted. This should be a valid JSON string that can be parsed into a JavaScript object or array. The function will parse this string and format it with proper indentation and line breaks.

**Type:** `string`

## Usage example

The function returns a formatted string representation of the JSON data with proper indentation and line breaks.

**Type:** `string`

```typescript
import { formatJsonString } from "@arkyn/shared";

const jsonString = '{"name":"John","age":30}';
const formatted = formatJsonString(jsonString);

console.log(formatted);
// Output:
// {
//   "name": "John",
//   "age": 30
// }
```

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid JSON string:** An error is thrown when the input string cannot be parsed as valid JSON. This includes malformed JSON such as missing quotes, trailing commas, unclosed brackets, or invalid syntax. The error message will include details about what went wrong during parsing.

```typescript
import { formatJsonString } from "@arkyn/shared";

try {
  const invalidJsonString = '{"name":"John", "age":30,';
  const formatted = formatJsonString(invalidJsonString);
  console.log(formatted);
} catch (error) {
  console.error(error);
  // Output: Error: Invalid JSON string
  // (with additional error details)
}
```

## Notes

This function internally uses the `formatJsonObject` function to format the parsed JSON data, which means it inherits all the formatting behaviors such as two-space indentation, inline display of empty objects and arrays, and proper handling of nested structures.

The function is particularly useful when you receive JSON data as a string from an API or file and need to display it in a readable format for debugging or logging purposes.

Unlike `formatJsonObject` which accepts any JavaScript value, this function specifically requires a string input and will throw an error if the string is not valid JSON, ensuring strict validation of JSON data.
