# formatToEllipsis

The `formatToEllipsis` function truncates a string to a specified maximum length and appends an ellipsis (`...`) if the original text exceeds that length.

## Import

```ts
import { formatToEllipsis } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`text`**

- **Type**: `string`
- **Description**: The input string to be truncated.
- **Required**: Yes
- **Default**: N/A

**`maxLength`**

- **Type**: `number`
- **Description**: The maximum allowed length for the string before truncation. - **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string`. If the input text is longer than `maxLength`, it returns the string truncated with an ellipsis. Otherwise, it returns the original string.

## Usage Example

### Truncate a Long String

```javascript
import { formatToEllipsis } from "./formatToEllipsis";

const text = "This is a very long string that needs to be truncated.";
const result = formatToEllipsis(text, 20);

console.log(result); // Output: "This is a very..."
```

### Short String Not Truncated

```javascript
import { formatToEllipsis } from "./formatToEllipsis";

const text = "Short text.";
const result = formatToEllipsis(text, 20);

console.log(result); // Output: "Short text."
```
