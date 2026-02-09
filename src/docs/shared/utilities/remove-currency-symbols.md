# removeCurrencySymbols

The `removeCurrencySymbols` function is a utility for removing currency symbols from formatted strings. This function uses regular expressions to strip out various currency symbols while preserving the numeric values and formatting, making it useful for parsing currency strings or preparing values for numeric calculations.

## Import

```ts
import { removeCurrencySymbols } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawString` (required)

The input string containing currency symbols to be removed. This can be any formatted currency string with symbols like $, €, ¥, £, R$, or other Unicode currency symbols.

**Type:** `string`

## Usage example

The function returns a string with all currency symbols removed and trimmed of any leading or trailing whitespace. The numeric values, decimal separators, and thousand separators remain intact.

**Type:** `string`

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("R$13,45");

console.log(result);
// Output: "13,45"
```

## Notes

The function uses a Unicode-aware regular expression that matches various currency symbols including the common ones ($, €, ¥, £) and the Unicode currency symbol property (`\p{Sc}`), ensuring comprehensive coverage of international currencies.

The Brazilian Real symbol (R$) is explicitly handled to ensure proper removal of the two-character symbol.

Leading and trailing whitespace is automatically removed from the result, ensuring clean output without extra spaces.

The function only removes currency symbols - it preserves all numeric characters, decimal points, commas, and other formatting characters.

The regex pattern uses the Unicode flag (`u`) to properly handle international currency symbols and the global flag (`g`) to remove all occurrences of currency symbols in the string.
