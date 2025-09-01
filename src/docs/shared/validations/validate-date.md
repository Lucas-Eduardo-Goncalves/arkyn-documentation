# validateDate

The `validateDate` function checks if a date string is valid, based on an input format and optional configurations such as a minimum and maximum year.

## Import

```ts
import { validateDate } from "@arkyn/shared";
```

## Parameters

- **rawDate** (`string`): The date string to validate.
- **config** (`ValidateDateConfig`, optional): Configuration object to customize the validation.
- `inputFormat` (`"DD/MM/YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD"`): The expected date format. Default: `"DD/MM/YYYY"`.
- `minYear` (`number`): The minimum allowed year. Default: `1900`.
- `maxYear` (`number`): The maximum year allowed. Default: `3000`.

## Returns

- **(`boolean`)**: Returns `true` if the date is valid, otherwise `false`.

## Errors

- **`Error`**: Throws an error if an invalid date format is provided in the configuration.

## Usage Example

```ts
import { validateDate } from "./validateDate";

validateDate("12/31/2023"); // true
validateDate("12-31-2023", { inputFormat: "MM-DD-YYYY" }); // true
validateDate("29/02/2023", { inputFormat: "DD/MM/YYYY" }); // false (not a leap year)
```
