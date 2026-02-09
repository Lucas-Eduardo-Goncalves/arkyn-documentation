# formatToHiddenDigits

The `formatToHiddenDigits` function is a utility for masking or hiding specific digits within a string while preserving non-digit characters and the overall structure. This function is particularly useful for displaying sensitive information like credit card numbers, phone numbers, or social security numbers in a secure manner.

## Import

```ts
import { formatToHiddenDigits } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `value` (required)

The input string containing digits to be masked. This can include any combination of digits and non-digit characters. Only the digits will be affected by the masking, while all other characters (such as hyphens, spaces, or parentheses) remain unchanged.

**Type:** `string`

### `options` (optional)

An optional configuration object to customize the masking behavior.

**Type:** `object`

#### `options.range` (optional)

Specifies which digits should be hidden. This parameter accepts two formats:

- A single positive number hides the first n digits (e.g., `3` hides the first three digits)
- A single negative number hides the last n digits (e.g., `-4` hides the last four digits)
- A tuple `[start, end]` specifies the exact range of digit positions to hide (inclusive, 1-indexed)

**Type:** `number | [number, number]`  
**Default:** `3`

#### `options.hider` (optional)

The character used to replace the hidden digits. This can be any single character that you want to use as a mask.

**Type:** `string`  
**Default:** `"*"`

## Usage example

The function returns a formatted string with the specified digits replaced by the hider character, while preserving all non-digit characters in their original positions.

**Type:** `string`

```typescript
import { formatToHiddenDigits } from "@arkyn/shared";

const result = formatToHiddenDigits("123-456-7890");

console.log(result);
// Output: "***-456-7890"
```

## Notes

The function only counts and masks actual digit characters (0-9), completely ignoring all other characters like spaces, hyphens, parentheses, or letters in the range calculation.

Digit positions are counted from 1, not 0, making the range specification more intuitive (e.g., `[1, 3]` hides the first three digits).

When using a positive single number for the range, digits are hidden from the beginning; when using a negative number, digits are hidden from the end.

The structure and formatting of the original string are completely preserved - only the digit characters within the specified range are replaced.
