# validatePhone

The `validatePhone` function checks whether a phone number matches a predefined country format. It iterates through a list of countries and uses regular expressions to validate the number based on the country code, prefix, and mask.

Special handling is applied to Brazilian phone numbers (ISO code "BR"), which allows an optional ninth digit.

## Import

```ts
import { validatePhone } from "@arkyn/shared";
```

## Parameters

- **rawPhone** (`string`): The phone number to be validated.

## Returns

- **(`boolean`)**: Returns `true` if the phone number matches any country format, otherwise `false`.

## Usage Example

```ts
import { validatePhone } from "./validatePhone";

validatePhone("+55 32912345678"); // true (valid for Brazil)
validatePhone("+1-684 1234567"); // true (valid for American Samoa)
validatePhone("+55 1234567890"); // false (invalid for Brazil)
```
