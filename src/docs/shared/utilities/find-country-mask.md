# findCountryMask

The `findCountryMask` utility returns the phone number mask for a given phone string using the project's
country templates (masks use `_` as digit placeholders).

## Import

```ts
import { findCountryMask } from "@arkyn/shared/findCountryMask";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Description

This function parses the provided phone number (using `libphonenumber-js`) to determine the country, then
looks up the corresponding mask in the `@arkyn/templates` `countries` list. Masks use `_` as digit placeholders
and can be either a single string or an array of masks for different national-number lengths.

The function returns a tuple with the selected mask and the full `CountryType` object from the templates.

## Parameters

- `phoneNumber` (required): The phone number to inspect. Can be in international format (e.g. `+5511999999999`)
  or a national format that `libphonenumber-js` can parse.

**Type:** `string`

## Returns

- A tuple: `[mask, country]` where `mask` is the mask string containing `_` placeholders and `country`
  is the `CountryType` object from the templates (contains `name`, `code`, `iso`, `flag`, and `mask`).

**Type:** `[string, CountryType]`

## Errors

The function throws an `Error` with one of the following messages when it cannot resolve a mask:

- `Invalid phone number` — when parsing fails or the parsed phone has no country.
- `Phone number country not supported` — when the parsed country iso is not present in the `countries` templates.
- `No mask found for the given phone number length` — when the country has multiple masks and none matches the
  national number length.

## Usage example

```ts
import { findCountryMask } from "@arkyn/shared/findCountryMask";

console.log(findCountryMask("+5511999999999"));
// Possible output:
// [
//  "(__) _____-____",
//  { name: "Brazil", code: "+55", iso: "BR", flag: "🇧🇷", mask: ["(__) _____-____", "(__) ____-____"] }
// ]

console.log(findCountryMask("+19700000000"));
// Possible output:
// [
//  "(___) ___-____",
//  { name: "United States", code: "+1", iso: "US", flag: "🇺🇸", mask: "(___) ___-____" }
// ]
```

## Notes

- The function depends on `parsePhoneNumberWithError` from `libphonenumber-js` to extract the country iso and
  the national number.
- When a country template's `mask` is a string, it is returned directly. When it's an array, the function
  selects the mask whose number of `_` placeholders matches the length of the parsed national number.
- Placeholders in masks are `_` (underscore). Consumer code should use the returned mask to format or
  display input masks in UI components.
- The function strips non-numeric characters from the parsed national number when comparing lengths (via
  `removeNonNumeric`).

## See also

- [`removeNonNumeric`](/docs/shared/utilities/remove-non-numeric) (utility used to count digits in the parsed national number)
- `@arkyn/templates` `countries` list (source of masks and country metadata)
