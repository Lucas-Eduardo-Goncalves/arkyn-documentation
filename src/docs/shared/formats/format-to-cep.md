# formatToCep

The `formatToCep` function removes all non-numeric characters from a string and formats it as a Brazilian ZIP code in the `XXXXX-XXX` format.

## Import

```ts
import { formatToCep } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`value`**

- **Type**: `string`
- **Description**: The input string to be formatted as a ZIP code.
- **Required**: Yes
- **Default**: N/A

## Return

The function returns a `string` with the ZIP code formatted in the `XXXXX-XXX` format.

## Errors

The function may generate the following error:

- `Error("Invalid ZIP code format")`: If the input string, after removing non-numeric characters, does not have 8 digits.

## Usage Example

### Formatting a Valid ZIP Code

```javascript
import { formatToZIP code } from "./formatToZIP code";

const formattedZIP code = formatToZIP code("12345678");
console.log(formattedZIP code); // Output: "12345-678"
```

### Handling an Invalid ZIP Code

```javascript
import { formatToZIP code } from "./formatToZIP code";

try {
formatToZIP code("1234");
} catch (error) {
console.error(error.message); // Output: "Invalid CEP format"
}
```
