# formatToPhone

The `formatToPhone` utility formats a phone number string according to the country mask defined in
`@arkyn/templates`.

## Import

```ts
import { formatToPhone } from "@arkyn/shared";
```

## Description

This function parses the input phone number using `libphonenumber-js` to determine the country and national
number, then applies the corresponding country's mask (where `_` is used as a digit placeholder) replacing
placeholders with actual digits.

It relies on `findCountryMask` to pick the appropriate mask for the parsed number and returns a formatted
string ready for display in UI components or logs.

## Parameters

- `phoneNumber` (required): The phone number to format. Can include the country calling code
  (e.g. `+5511999999999`) or be provided in a national format parsable by `libphonenumber-js`.

**Type:** `string`

## Returns

- The phone number formatted according to the country's mask. All `_` placeholders in the chosen mask are
  replaced by digits from the parsed national number.

**Type:** `string`

## Errors

The function will throw an `Error` in cases such as:

- Invalid phone number parsing.
- No country mask found for the parsed country (propagated from `findCountryMask`).

## Usage example

```ts
import { formatToPhone } from "@arkyn/shared";

console.log(formatToPhone("+5534920524282")); // => "(34) 92052-4282"
console.log(formatToPhone("+553420524282")); // => "(34) 2052-4282"
console.log(formatToPhone("+12125550199")); // => "(212) 555-0199"
```

## Notes

- The function uses `parsePhoneNumberWithError` from `libphonenumber-js` to obtain the country iso and
  national number.
- If the chosen mask contains more placeholders than digits available, only the available placeholders are
  replaced; remaining placeholders remain untouched (consumer components may choose to handle incomplete
  masks differently).
- Use `findCountryMask` to inspect which mask will be applied for a given input before formatting.

## See also

- `findCountryMask` (utility that selects the mask): [`src/docs/shared/utilities/find-country-mask.md`](/docs/shared/utilities/find-country-mask)
- `libphonenumber-js` — parsing and validation library used for phone number analysis
