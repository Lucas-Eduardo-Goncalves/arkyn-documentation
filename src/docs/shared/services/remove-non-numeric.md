# removeNonNumeric

The `removeNonNumeric` function removes all non-digit characters from an input string, returning only the numbers.

## Import

```ts
import { removeNonNumeric } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`prop`**

- **Type**: `string`
- **Description**: The input string from which non-numeric characters will be removed.
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string` containing only the numeric characters from the input string.

## Usage Example

```javascript
import { removeNonNumeric } from "./removeNonNumeric";

const result = removeNonNumeric("abc123def456-!@#");
console.log(result); // Output: "123456"
```
