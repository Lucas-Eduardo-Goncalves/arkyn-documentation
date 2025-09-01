# formatJsonString

The `formatJsonString` function parses a JSON string and formats it into a more readable representation, using the `formatJsonObject` function internally.

## Import

```ts
import { formatJsonString } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`jsonString`**

- **Type**: `string`
- **Description**: The JSON string to be formatted.
- **Required**: Yes
- **Default**: N/A

## Return

The function returns a `string` with the formatted JSON.

## Errors

The function may generate the following error:

- `Error("Invalid JSON string ...")`: If the input string is not valid JSON. The original parsing error will be included in the message.

## Usage Example

### Formatting a Valid JSON String

```javascript
import { formatJsonString } from "./formatJsonString";

const jsonString = '{"name":"John","age":30,"hobbies":["reading","games"]}';
const formatted = formatJsonString(jsonString);

console.log(formatted);
/*
Output:
{
  "name": "John", 
  "age": 30,
  "hobbies": [
    "reading",
    "games"
  ]
}
*/
```

### Dealing with an Invalid JSON String

```javascript
import { formatJsonString } from "./formatJsonString";

const invalidJsonString = '{"name":"John", "age":30,';

try {
  const formatted = formatJsonString(invalidJsonString);
  console.log(formatted);
} catch (e) {
  console.error(e.message);
  // Expected output: "Invalid JSON string ..." followed by the syntax error.
}
```
