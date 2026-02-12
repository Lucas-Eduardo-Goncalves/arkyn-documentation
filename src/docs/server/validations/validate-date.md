# validateDate

The `validateDate` function is a utility for validating date strings based on various input formats. It performs comprehensive validation including format parsing, leap year checks, month-specific day limits, and configurable year range restrictions.

## Import

```ts
import { validateDate } from "@arkyn/server";
```

## Parameters

The function accepts the following parameters:

### `date` (required)

The date string to validate. The format should match the specified `inputFormat` configuration.

**Type:** `string`

### `config` (optional)

An optional configuration object to customize the validation behavior.

**Type:** `object`

### `config.inputFormat` (optional)

Specifies the format of the input date string. The function supports three different input formats:

- `"brazilianDate"` expects dates in `DD/MM/YYYY` or `DD-MM-YYYY` format (e.g., "31/12/2023"), commonly used in Brazil and other countries.
- `"isoDate"` expects dates in `MM-DD-YYYY` or `MM/DD/YYYY` format (e.g., "12-31-2023"), following the American date convention.
- `"timestamp"` expects dates in `YYYY-MM-DD` or `YYYY/MM/DD` format (e.g., "2023-12-31"), which is the ISO 8601 standard format.

**Type:** `"brazilianDate" | "isoDate" | "timestamp"`  
**Default:** `"brazilianDate"`

### `config.minYear` (optional)

The minimum allowed year for the date. Dates with years below this value will be considered invalid.

**Type:** `number`  
**Default:** `1900`

### `config.maxYear` (optional)

The maximum allowed year for the date. Dates with years above this value will be considered invalid.

**Type:** `number`  
**Default:** `3000`

## Usage example

The function returns a boolean indicating whether the provided date is valid.

**Type:** `boolean`

```typescript
import { validateDate } from "@arkyn/server";

// Brazilian date format (default)
validateDate("31/12/2023");
// Output: true

// ISO date format (American convention)
validateDate("12-31-2023", { inputFormat: "isoDate" });
// Output: true

// Timestamp format (ISO 8601)
validateDate("2023-12-31", { inputFormat: "timestamp" });
// Output: true

// With year range restrictions
validateDate("2023-12-31", {
  inputFormat: "timestamp",
  minYear: 2000,
  maxYear: 2100,
});
// Output: true

// Leap year validation (2024 is a leap year)
validateDate("29/02/2024", { inputFormat: "brazilianDate" });
// Output: true

// Invalid: 2023 is not a leap year
validateDate("29/02/2023", { inputFormat: "brazilianDate" });
// Output: false

// Invalid: April only has 30 days
validateDate("31/04/2023", { inputFormat: "brazilianDate" });
// Output: false

// Invalid: wrong format
validateDate("2023/12/31", { inputFormat: "brazilianDate" });
// Output: false
```

## Validation Steps

The function performs the following validations:

1. **Format validation:** Verifies that the input format is one of the supported formats.

2. **Structure check:** Ensures the date string can be split into exactly 3 parts (day, month, year) using `-` or `/` as separators.

3. **Date parts validation:** Validates each component:
   - **Year:** Must be exactly 4 digits
   - **Month:** Must be between 1 and 12
   - **Day:** Must be valid for the given month, including leap year rules

4. **Year range check:** Verifies that the year falls within the configured `minYear` and `maxYear` bounds.

## Notes

The function uses `ValidateDateService` from `@arkyn/shared` internally to perform date component validation, including proper leap year detection.

Leap year validation follows the standard rules: a year is a leap year if it's divisible by 4, except for years divisible by 100 unless also divisible by 400.

Both `-` and `/` are accepted as date separators, regardless of the input format specified.

Common use cases include form validation, data import verification, and input sanitization for date fields.
