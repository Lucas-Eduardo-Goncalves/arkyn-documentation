# truncateLargeFields

The `truncateLargeFields` function parses a JSON string, recursively traverses its structure, and truncates any string fields that exceed a specified maximum length. If a string field is truncated, it is replaced with a message indicating the field's original length.

## Import

```ts
import { truncateLargeFields } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`jsonString`**

- **Type**: `string`
- **Description**: The JSON string to be processed. - **Required**: Yes
- **Default**: N/A

**`maxLength`** (optional)

- **Type**: `number`
- **Description**: The maximum length allowed for string fields.
- **Default**: `1000`

## Returns

The function returns a JSON string with large string fields truncated.

## Errors

The function may generate the following error:

- `Error("Invalid JSON string")`: If the input string is not valid JSON.

## Usage Example

```javascript
import { truncateLargeFields } from "./truncateLargeFields";

const json = JSON.stringify({
  name: "John",
  description: "A very long description that exceeds the maximum length...",
  nested: {
    details: "Another long string that needs truncation.",
  },
});

const result = truncateLargeFields(json, 50);

console.log(result);
// Output: '{"name":"John","description":"To large information: field as 58 characters","nested":{"details":"To large information: field as 42 characters"}}'
```
