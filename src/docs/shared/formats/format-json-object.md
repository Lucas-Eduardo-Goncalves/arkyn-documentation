# formatJsonObject

The `formatJsonObject` function is a utility for formatting a JSON object or value into a well-formatted, readable string, with control over the indentation level.

## Import

```ts
import { formatJsonObject } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`obj`**

- **Type**: `any`
- **Description**: The JSON object or value to be formatted. Can be an object, array, string, or primitive value.
- **Required**: Yes
- **Default**: N/A

**`indentLevel`**

- **Type**: `number`
- **Description**: The indentation level to apply. Used recursively to format nested structures.
- **Required**: Yes
- **Default**: N/A

## Return

The function returns a string with the formatted representation of the JSON object.

## Notes

- If the input is an object, it will be formatted with properly indented keys and values.
- If the input is an array, each element will be formatted and indented on a new line.
- If the input is a string that can be parsed as JSON, the function will attempt to parse and format it.
- Primitive values ​​(such as numbers, booleans, and nulls) will be converted to their string representation.

## Usage Example

```javascript
import { formatJsonObject } from "./formatJsonObject";

const obj = { name: "John", age: 30, hobbies: ["reading", "games"] };
const formatted = formatJsonObject(obj, 0);

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
