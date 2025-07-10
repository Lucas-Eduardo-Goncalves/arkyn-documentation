---
title: Currencies by Country
description: Documentation for the `countryCurrencies` template, which provides a mapping between currency codes and locale settings.
---

The `countryCurrencies.ts` file exports an object that maps currency codes (ISO 4217) to an object containing the locale (`countryLanguage`) and the currency code (`countryCurrency`).

This template is useful for formatting monetary values ​​according to the conventions of a specific country, ensuring that the display of prices and other values ​​is clear and accurate for the user.

## Object Structure

The `countryCurrencies` object has the currency code as its key (e.g., `"BRL"`) and an object with the following structure as its value:

```typescript
interface CurrencyInfo {
  countryLanguage: string;
  countryCurrency: string;
}
```

- `countryLanguage`: A language and country code (e.g., `pt-BR`) that can be used with the `Intl.NumberFormat` API to format numbers.
- `countryCurrency`: The currency code (e.g., `BRL`), also used in formatting.

## Usage Example

To format a number as Brazilian currency, you can use the object as follows:

```typescript
import { countryCurrencies } from "./countryCurrencies";

function formatToBRL(value: number) {
  const { countryLanguage, countryCurrency } = countryCurrencies.BRL;

  return new Intl.NumberFormat(countryLanguage, {
    style: "currency",
    currency: countryCurrency,
  }).format(value);
}

// Example output: R$ 1,234.56
console.log(formatToBRL(1234.56));
```

## Example Object (BRL)

```json
{
  "BRL": {
    "countryLanguage": "pt-BR",
    "countryCurrency": "BRL"
  }
}
```
