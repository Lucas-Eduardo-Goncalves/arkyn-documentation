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

## Return

The function returns a string with all currency symbols removed and trimmed of any leading or trailing whitespace. The numeric values, decimal separators, and thousand separators remain intact.

**Type:** `string`

## Notes

The function uses a Unicode-aware regular expression that matches various currency symbols including the common ones ($, €, ¥, £) and the Unicode currency symbol property (`\p{Sc}`), ensuring comprehensive coverage of international currencies.

The Brazilian Real symbol (R$) is explicitly handled to ensure proper removal of the two-character symbol.

Leading and trailing whitespace is automatically removed from the result, ensuring clean output without extra spaces.

The function only removes currency symbols - it preserves all numeric characters, decimal points, commas, and other formatting characters.

The regex pattern uses the Unicode flag (`u`) to properly handle international currency symbols and the global flag (`g`) to remove all occurrences of currency symbols in the string.

## Usage Examples

### Remove Brazilian Real symbol

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("R$13,45");

console.log(result);
// Output: "13,45"
```

### Remove US Dollar symbol

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("$123.45");

console.log(result);
// Output: "123.45"
```

### Remove Euro symbol

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("€99.99");

console.log(result);
// Output: "99.99"
```

### Remove Yen symbol

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("¥1,000");

console.log(result);
// Output: "1,000"
```

### Remove Pound symbol

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("£50.00");

console.log(result);
// Output: "50.00"
```

### Handle string without currency symbols

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("123.45");

console.log(result);
// Output: "123.45"
```

### Remove currency symbol with spaces

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("R$ 1.234,56");

console.log(result);
// Output: "1.234,56"
```

### Handle large formatted values

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("$1,234,567.89");

console.log(result);
// Output: "1,234,567.89"
```

### Remove multiple currency symbols

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("$100 + €50");

console.log(result);
// Output: "100 + 50"
```

### Handle currency symbol at the end

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("123.45$");

console.log(result);
// Output: "123.45"
```

### Parse currency string for calculation

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const priceString = "R$ 1.234,56";
const numericString = removeCurrencySymbols(priceString);
const numericValue = parseFloat(numericString.replace(".", "").replace(",", "."));

console.log(numericValue);
// Output: 1234.56
```

### Clean multiple currency values

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const prices = ["$10.00", "€20.00", "¥1,000", "R$50,00"];
const cleanPrices = prices.map(price => removeCurrencySymbols(price));

console.log(cleanPrices);
// Output: ["10.00", "20.00", "1,000", "50,00"]
```

### Remove symbol with extra whitespace

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("  $ 100.00  ");

console.log(result);
// Output: "100.00"
```

### Handle empty string

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

const result = removeCurrencySymbols("");

console.log(result);
// Output: ""
```

### Use in price comparison

```typescript
import { removeCurrencySymbols } from "@arkyn/shared";

function comparePrices(price1: string, price2: string): number {
  const clean1 = parseFloat(removeCurrencySymbols(price1).replace(",", "."));
  const clean2 = parseFloat(removeCurrencySymbols(price2).replace(",", "."));

  return clean1 - clean2;
}

const difference = comparePrices("R$ 100,50", "R$ 85,30");
console.log(difference);
// Output: 15.2
```
