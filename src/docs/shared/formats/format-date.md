# formatDate

The `formatDate` function is a utility for formatting date and time strings from various input formats to a custom output format, with support for timezone adjustments.

## Import

```ts
import { formatDate } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `dateTime` (required)

An array containing the date string and an optional time string. The first element is the date (required), and the second element is the time (optional, defaults to "00:00:00" if not provided).

**Type:** `[string, string?]`

### `inputFormat` (required)

Specifies the format of the input date string. The function supports three different input formats:

- `"brazilianDate"` expects dates in "DD/MM/YYYY" or "D/M/YYYY" format (e.g., "25/12/2023" or "5/3/2023"), commonly used in Brazil and other countries.
- `"isoDate"` format expects dates in "MM-DD-YYYY" or "M-D-YYYY" format (e.g., "12-25-2023" or "3-5-2023"), following the American date convention.
- `"timestamp"` expects dates in "YYYY-MM-DD" or "YYYY-M-D" format (e.g., "2023-12-25" or "2023-3-5"), which is the ISO 8601 standard format.

**Type:** `"brazilianDate" | "isoDate" | "timestamp"`

### `outputFormat` (required)

The desired output format for the formatted date. You can create custom formats using specific placeholders that will be replaced with the corresponding date and time values. The available placeholders are:

- `YYYY` for four-digit year (e.g., 2023),
- `YY` for two-digit year (e.g., 23),
- `MM` for two-digit month (01-12),
- `DD` for two-digit day (01-31),
- `hh` for two-digit hour in 24-hour format (00-23),
- `mm` for two-digit minute (00-59),
- `ss` for two-digit second (00-59). You can combine these placeholders with any text or separators to create the exact format you need.

**Type:** `string`

### `timezone` (optional)

The timezone offset in hours to apply to the date. Positive values shift the time forward, while negative values shift it backward. For example, use `-3` for UTC-3 (Brasília Time in Brazil), `1` for UTC+1 (Central European Time), or `5` for UTC+5 (Pakistan Standard Time). If not specified, the function uses UTC+0 (Coordinated Universal Time) as the default.

**Type:** `number`  
**Default:** `0` (UTC)

## Usage example

The function returns a formatted date string based on the specified output format.

**Type:** `string`

```typescript
import { formatDate } from "@arkyn/shared";

const formattedDate = formatDate(
  ["25/12/2023"],
  "brazilianDate",
  "YYYY-MM-DD hh:mm",
);

console.log(formattedDate); // "2023-12-25 00:00"
```

## Errors

The function performs strict validation and may throw errors in the following scenarios:

**Invalid input format:** An error is thrown when the `inputFormat` parameter is not one of the three allowed values: "brazilianDate", "isoDate", or "timestamp". Make sure you're using the correct format identifier that matches your input date structure.

**Invalid date components:** The function validates that all date parts are within acceptable ranges. This includes ensuring the month is between 1 and 12, the day is valid for the given month (considering leap years), and the year is a valid number. For example, trying to use month 13 or day 32 will result in an error.

**Invalid date construction:** An error with the message `"Invalid date"` is thrown when the combination of date parts creates an impossible date, such as February 30th or April 31st. The function uses JavaScript's Date object validation to ensure the final date is legitimate.

```typescript
import { formatDate } from "@arkyn/shared";
try {
  const invalidDate = formatDate(["31/02/2023"], "brazilianDate", "YYYY-MM-DD");
  console.log(invalidDate);
} catch (error) {
  console.error(error);
  // Output: Error: Day 31 is not valid for February
}
```

## Notes

This function works with UTC+0 (Coordinated Universal Time) by default, which means the returned formatted string is **not automatically converted** to your machine's local timezone. If you need to work with a specific timezone, you must explicitly provide the `timezone` parameter with the appropriate offset value.

The time string is flexible and can include milliseconds (e.g., "15:30:00.123"), though only hours, minutes, and seconds will be used in the final formatting. The milliseconds portion is automatically ignored.

The function supports flexible date separators: you can use `/` (slash) for Brazilian dates or `-` (hyphen) for ISO and timestamp formats. Additionally, both single-digit and double-digit days and months are accepted, so "5/3/2023" and "05/03/2023" are equally valid inputs.
