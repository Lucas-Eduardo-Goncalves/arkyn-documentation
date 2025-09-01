# removeCurrencySymbols

The `removeCurrencySymbols` function removes currency symbols from an input string. The function uses a regular expression to remove common symbols such as `R$`, `$`, `€`, `¥`, `£`, and other currency symbols (`\p{Sc}`).

## Import

```ts
import { removeCurrencySymbols } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

**`formattedValue`**

- **Type**: `string`
- **Description**: The input string that may contain currency symbols. - **Required**: Yes
- **Default**: N/A

## Returns

The function returns a string with all currency symbols removed and no leading or trailing whitespace.

## Usage Example

```javascript
import { removeCurrencySymbols } from "./removeCurrencySymbols";

removeCurrencySymbols("R$13.45"); // Returns "13.45"
removeCurrencySymbols("$123.45"); // Returns "123.45"
removeCurrencySymbols("€99.99"); // Returns "99.99"
removeCurrencySymbols("¥1,000"); // Returns "1,000"
removeCurrencySymbols("123.45"); // Returns "123.45" (no symbol to remove)
```
