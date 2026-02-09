# parseToDate

The `parseToDate` function is a utility for converting date and time strings from various input formats into JavaScript `Date` objects with timezone adjustment support. This function is particularly useful when working with dates from different sources or locales that need to be standardized into Date objects.

## Import

```ts
import { parseToDate } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `dateTime` (required)

A tuple containing the date string and an optional time string. The first element is the date (required), and the second element is the time (optional, defaults to "00:00:00" if not provided).

**Type:** `[string, string?]`

### `inputFormat` (required)

Specifies the format of the input date string. The function supports three different input formats:

- `"brazilianDate"` expects dates in "DD/MM/YYYY" or "D/M/YYYY" format (e.g., "25/12/2023" or "5/3/2023"), commonly used in Brazil and other countries.
- `"isoDate"` expects dates in "MM-DD-YYYY" or "M-D-YYYY" format (e.g., "12-25-2023" or "3-5-2023"), following the American date convention.
- `"timestamp"` expects dates in "YYYY-MM-DD" or "YYYY-M-D" format (e.g., "2023-12-25" or "2023-3-5"), which is the ISO 8601 standard format.

**Type:** `"brazilianDate" | "isoDate" | "timestamp"`

### `timezone` (optional)

The timezone offset in hours to apply to the date. This parameter allows you to adjust the date to a specific timezone relative to UTC. Positive values shift the time forward (east), while negative values shift it backward (west).

**Type:** `number`  
**Default:** `0` (UTC)

## Usage example

The function returns a JavaScript `Date` object representing the parsed date and time, adjusted for the specified timezone. The returned Date object is in UTC but reflects the timezone adjustment applied.

**Type:** `Date`

```typescript
import { parseToDate } from "@arkyn/shared";

const date = parseToDate(["25/12/2023", "15:30:00"], "brazilianDate", -3);

console.log(date);
// Output: 2023-12-25T12:30:00.000Z (UTC, adjusted for -3 timezone)
```

## Errors

The function performs validation and may throw errors in the following scenarios:

**Invalid input format:** An error is thrown when an unsupported `inputFormat` value is provided. Only "brazilianDate", "isoDate", and "timestamp" are valid.

**Invalid date parts:** An error is thrown when the provided date components (year, month, day) are invalid, such as month values outside 1-12, day values outside valid ranges for the given month, or other date inconsistencies.

**Invalid date:** An error is thrown when the resulting Date object cannot be created from the provided input, such as when the date string contains non-numeric characters or malformed values.

## Notes

This function works with UTC+0 by default. The returned Date object is not automatically converted to the machine's local timezone. To adjust the timezone, you must manually specify the `timezone` parameter (e.g., -3 for UTC-3 or +5 for UTC+5).

The function internally uses the `ValidateDateService` to ensure the input format and date components are valid before creating the Date object.

Time values can include milliseconds (e.g., "15:30:00.500"), but milliseconds are automatically stripped before parsing to ensure consistent behavior.

The function supports flexible date formats with single or double-digit day and month values, making it suitable for various input sources.
