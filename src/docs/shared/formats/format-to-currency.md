# formatToCurrency

The `formatToCurrency` function is a utility for formatting numeric values into currency strings with proper locale-specific formatting. It supports multiple international currencies and provides flexible options for displaying currency symbols.

## Import

```ts
import { formatToCurrency } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `value` (required)

The numeric value to be formatted as currency. This can be any valid number, including integers and decimals. The function will automatically apply the appropriate decimal precision based on the selected currency's standard format.

**Type:** `number`

### `currency` (required)

The currency code that determines the formatting style, symbol, and locale. The function supports a wide range of international currencies including major world currencies and regional ones.

**Type:** `"USD"`, `"EUR"`, `"JPY"`, `"GBP"`, `"AUD"`, `"CAD"`, `"CHF"`, `"CNY"`, `"SEK"`, `"NZD"`, `"BRL"`, `"INR"`, `"RUB"`, `"ZAR"`, `"MXN"`, `"SGD"`, `"HKD"`, `"NOK"`, `"KRW"`, `"TRY"`, `"IDR"`, `"THB"`

### `config` (optional)

An optional configuration object to customize the output format.

**Type:** `object`

#### `config.showPrefix` (optional)

Determines whether the currency symbol or prefix should be included in the formatted string. When set to `true`, the currency symbol (e.g., "$", "R$", "€") is displayed. When set to `false`, only the numeric value with appropriate thousand separators and decimal points is returned.

**Type:** `boolean`  
**Default:** `true`

## Return

The function returns a formatted currency string based on the specified locale and currency. The format includes proper thousand separators, decimal points, and optionally the currency symbol.

## Errors

The function performs validation and may throw an error in the following scenario:

**Unsupported currency code:** An error is thrown when the provided currency code is not supported by the function. Only the predefined currency codes listed in the parameters section are valid.

## Notes

The function uses the `Intl.NumberFormat` API internally, which ensures that currency formatting follows international standards and locale-specific conventions for each currency.

Different currencies have different formatting rules: for example, USD uses commas for thousands and periods for decimals ("1,234.56"), while BRL uses periods for thousands and commas for decimals ("1.234,56").

The function internally uses the `removeCurrencySymbols` utility when `showPrefix` is set to `false`, ensuring clean numeric output without any currency symbols or prefixes.

All spaces in the formatted output are normalized to ensure consistent spacing between currency symbols and values.

## Usage Examples

### Format USD with prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "USD", { showPrefix: true });

console.log(formatted);
// Output: "$1,234.56"
```

### Format USD without prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "USD", { showPrefix: false });

console.log(formatted);
// Output: "1,234.56"
```

### Format BRL with prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "BRL", { showPrefix: true });

console.log(formatted);
// Output: "R$ 1.234,56"
```

### Format BRL without prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "BRL", { showPrefix: false });

console.log(formatted);
// Output: "1.234,56"
```

### Format EUR with prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "EUR");

console.log(formatted);
// Output: "€1,234.56"
```

### Format JPY (no decimal places)

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "JPY");

console.log(formatted);
// Output: "¥1,235"
```

### Format GBP with prefix

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "GBP");

console.log(formatted);
// Output: "£1,234.56"
```

### Format large values

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234567.89, "USD");

console.log(formatted);
// Output: "$1,234,567.89"
```

### Format zero value

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(0, "USD");

console.log(formatted);
// Output: "$0.00"
```

### Format negative value

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(-1234.56, "USD");

console.log(formatted);
// Output: "-$1,234.56"
```

### Handle unsupported currency

```typescript
import { formatToCurrency } from "@arkyn/shared";

try {
  const formatted = formatToCurrency(1234.56, "XYZ" as any);
  console.log(formatted);
} catch (error) {
  console.error(error);
  // Output: Error: Unsupported currency code
}
```

### Format with default config

```typescript
import { formatToCurrency } from "@arkyn/shared";

const formatted = formatToCurrency(1234.56, "CAD");

console.log(formatted);
// Output: "CA$1,234.56"
```
