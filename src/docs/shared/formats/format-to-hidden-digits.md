# formatToHiddenDigits

The `formatToHiddenDigits` function formats a string by replacing digits within a specified range with a hiding character, such as `*`.

## Import

```ts
import { formatToHiddenDigits } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`value`**

- **Type**: `string`
- **Description**: The input string to be formatted.
- **Required**: Yes
- **Default**: N/A

**`options`**

- **Type**: `object`
- **Description**: Configuration object for formatting. - **Required**: Yes
- **Default**: N/A
- **Properties**:
- **`range`** (optional)
- **Type**: `number | [number, number]`
- **Description**: The range of digits to hide.
- A positive number (`n`): Hides the first `n` digits.
- A negative number (`-n`): Hides the last `n` digits.
- A tuple `[start, end]`: Hides the digits from `start` to `end` (inclusive).
- **Default**: `3` (hides the first three digits).
- **`hider`** (optional)
- **Type**: `string`
- **Description**: The character used to hide the digits.
- **Default**: `*`

## Returns

The function returns a `string` with the specified digits hidden.

## Usage Example

### Hide the First Digits (Default)

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const result = formatToHiddenDigits("123-456-7890", { range: 3 });
console.log(result); // Output: "***-456-7890"
```

### Hide a Specific Range with a Custom Character

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const result = formatToHiddenDigits("123-456-7890", {
  range: [4, 6],
  hider: "#",
});
console.log(result); // Output: "123-###-7890"
```

### Hide the Last Digits

```javascript
import { formatToHiddenDigits } from "./formatToHiddenDigits";

const result = formatToHiddenDigits("123-456-7890", { range: -4 });
console.log(result); // Output: "123-456-****"
```
