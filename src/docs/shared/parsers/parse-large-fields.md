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

## Usage example

The function returns a JSON string with large string fields truncated. Truncated fields are replaced with the message "To large information: field as X characters", where X is the original length of the string.

**Type:** `string`

```typescript
import { parseLargeFields } from "@arkyn/shared";

const json = JSON.stringify({
  name: "John",
  description:
    "A very long description that exceeds the maximum length and needs to be truncated for display purposes",
});

const result = parseLargeFields(json, 50);

console.log(result);
// Output: '{"name":"John","description":"To large information: field as 108 characters"}'
```

## Errors

The function performs validation and may throw an error in the following scenario:

**Invalid JSON string:** An error is thrown when the input string cannot be parsed as valid JSON. This includes malformed JSON such as missing quotes, trailing commas, unclosed brackets, or invalid syntax.

## Notes

The function uses a recursive approach to traverse nested objects and arrays, ensuring that all string fields at any depth are checked and truncated if necessary.

Non-string values (numbers, booleans, null, etc.) are preserved as-is and are not affected by the truncation logic.

The truncation message includes the original character count, which can be useful for determining if you need to adjust the `maxLength` parameter or investigate specific fields.

Empty strings and strings shorter than or equal to `maxLength` are preserved unchanged.

The function works with complex nested structures including arrays of objects, objects with nested objects, and mixed data types.
