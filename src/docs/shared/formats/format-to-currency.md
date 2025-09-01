# formatToCurrency

The `formatToCurrency` function formats a numeric value into a currency string, allowing you to specify the currency and choose whether or not to display the currency symbol prefix.

## Import

```ts
import { formatToCurrency } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`value`**

- **Type**: `number`
- **Description**: The numeric value to be formatted.
- **Required**: Yes
- **Default**: N/A

**`currency`**

- **Type**: `string`
- **Description**: The currency code to determine the formatting style (e.g., "USD", "BRL").
- **Required**: Yes
- **Default**: N/A

**`config`** (optional)

- **Type**: `object`
- **Description**: A configuration object.
- **Properties**:
- `showPrefix` (optional): `boolean` - Determines whether the currency symbol/prefix should be included. The default is `true`.

## Returns

The function returns a `string` with the formatted currency. If `config.showPrefix` is `false`, the currency symbol is removed.

## Errors

The function may generate the following error:

- `Error("Unsupported currency code")`: If the provided currency code is not supported.

## Usage Example

### Format to US Dollar (USD)

```javascript
import { formatToCurrency } from "./formatToCurrency";

// With prefix
const formattedUSD = formatToCurrency(1234.56, "USD");
console.log(formattedUSD); // Output: "$1,234.56"

// Without prefix
const withoutPrefixUSD = formatToCurrency(1234.56, "USD", {
  showPrefix: false,
});
console.log(withoutPrefixUSD); // Output: "1,234.56"
```

### Format to Brazilian Real (BRL)

```javascript
import { formatToCurrency } from "./formatToCurrency";

// With prefix
const formattedBRL = formatToCurrency(1234.56, "BRL");
console.log(formattedBRL); // Output: "R$ 1,234.56"

// Without prefix
const withoutPrefixBRL = formatToCurrency(1234.56, "BRL", {
  showPrefix: false,
});
console.log(withoutPrefixBRL); // Output: "1,234.56"
```
