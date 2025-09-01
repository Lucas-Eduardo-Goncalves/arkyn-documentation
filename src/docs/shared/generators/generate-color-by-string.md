# generateColorByString

The `generateColorByString` function creates a hexadecimal color code from an input string. The function calculates a hash of the string and uses it to derive the RGB values, which are then converted to a hexadecimal color code.

## Import

```ts
import { generateColorByString } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`prop`**

- **Type**: `string`
- **Description**: The input string used to generate the color. - **Required**: Yes
- **Default**: N/A

## Returns

The function returns a string containing a hexadecimal color code (e.g., `"#a1b2c3"`) derived from the input string.

## Usage Example

```javascript
import { generateColorByString } from "./generateColorByString";

const color = generateColorByString("example");
console.log(color); // Generates a consistent hexadecimal color, such as "#5e8f9a"
```
