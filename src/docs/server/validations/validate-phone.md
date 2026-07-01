# validatePhone

Validates a phone number against country-specific formats defined in the project templates.

## Import

```ts
import { validatePhone } from "@arkyn/shared/validatePhone";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Description

This function uses `libphonenumber-js` to validate and analyze the provided phone number and
checks if there is a country supported by `@arkyn/templates` corresponding to the number's code/ISO.

If the country is found, the function considers the number valid. Initial validation is done with
`isValidPhoneNumber` to quickly discard invalid inputs.

In the case of Brazil (`iso: "BR"`), the project's masking ecosystem accepts variations with or without the
ninth digit when applicable, but the base validation here depends on `libphonenumber-js` and the configured country templates.

## Parameters

- `rawPhone` (required): The phone number to validate. It can contain an international code (e.g., `+5511999999999`)

or be in national format, as long as it is parsable by `libphonenumber-js`.

**Type:** `string`

## Return

- `boolean` — `true` if the number is considered valid for any country present in the templates; otherwise `false`.

## Errors

This function does not throw exceptions for common validations — it returns `false` when the number is invalid or
when the country is not supported. Any error not handled by `libphonenumber-js` will be propagated through the runtime.

## Examples

```ts
import { validatePhone } from "@arkyn/shared/validatePhone";

validatePhone("+5532912345678"); // true (e.g., valid Brazilian number)
validatePhone("+553212345678"); // true (variation without 9th digit where applicable)
validatePhone("+19706574614"); // true (e.g., valid format for American Samoa / US range)
validatePhone("+55329123456178"); // false (number too long / invalid)
validatePhone("+55123456789"); // false (invalid number for BR)
```

## Notes

- Primary validation is done by `isValidPhoneNumber` from `libphonenumber-js` — this ensures that the format and length are consistent with international rules.
- Next, the function attempts to map the returned country (`iso`) to one of the countries present in

`@arkyn/templates` (`countries`). If the country is not in the list of templates, the function returns `false`.

- If you need more restrictive validations (for example, forcing a specific mask), combine

`validatePhone` with `findCountryMask` and custom rules from your frontend.

## See also

- [`findCountryMask`](/docs/shared/utilities/find-country-mask) — selects the display mask by country.
- [`formatToPhone`](/docs/shared/formats/format-to-phone) — formats a number according to the country mask.
