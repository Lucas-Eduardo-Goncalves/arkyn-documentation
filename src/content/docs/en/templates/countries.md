---
title: Countries
description: Documentation for the `countries` template, which provides a list of countries with useful information for country selection forms and components.
---

The `countries.ts` file exports an array of objects, where each object represents a country and contains useful information for interface components, such as country selectors in phone number forms.

This standardized list makes it easier to implement features that require country data, such as dialing codes, flags, and phone formatting masks.

## Object Structure

Each object in the `countries` array follows the following structure:

```typescript
interface Country {
  name: string;
  code: string;
  prefix: string | null;
  iso: string;
  flag: string;
  mask: string;
}
```

- `name`: The official name of the country (e.g., `"Brazil"`).
- `code`: The international dialing code (e.g., `+55`).
- `prefix`: A specific telephone prefix that may be required for some regions or number types. It is `null` if not applicable.
- `iso`: The ISO 3166-1 alpha-2 country code (e.g., `BR`).
- `flag`: The URL to the SVG image of the country's flag.
- `mask`: A formatting mask for phone numbers, where `_` represents a digit to be inserted (e.g., `"(__) _____-____"`).

## Usage Example

To use the list of countries in your component, simply import the array from the file:

```typescript
import { countries } from "./countries";

function CountrySelector() {
  return (
    <select>
      {countries.map((country) => (
        <option key={country.iso} value={country.code}>
          <img src={country.flag} alt={country.name} />
          {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}
```

## Object Example (Brazil)

```json
{
  "name": "Brazil",
  "code": "+55",
  "prefix": null,
  "iso": "BR",
  "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
  "mask": "(__) _____-____"
}
```
