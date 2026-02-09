# ValidateDateService

The `ValidateDateService` is a service class for validating date components and input formats. It provides methods to validate date parts (year, month, day) and input format strings used in date parsing operations, including leap year validation and month-specific day validation.

## Import

```ts
import { ValidateDateService } from "@arkyn/shared";
```

## Method `validateDateParts(year, month, day)`

Validates the components of a date (year, month, and day). This method performs comprehensive validation including leap year rules and month-specific day limits.

### `year` (required)

The year to validate (must be exactly 4 digits)

**Type:** `number`

### `month` (required)

The month to validate (must be between 1 and 12) |

**Type:** `number`

### `day` (required)

The day to validate (must be valid for the given month)

**Type:** `number`

### Usage example

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

service.validateDateParts(2024, 2, 29); // Valid leap year date
service.validateDateParts(2024, 1, 15); // Valid regular date
```

---

## Method `validateInputFormat(format)`

Validates that a given format string is one of the supported input formats.

### `format` (required)

The format string to validate

**Type:** `brazilianDate` | `isoDate` | `timestamp`

### Usage example

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

service.validateInputFormat("brazilianDate"); // Valid
service.validateInputFormat("isoDate"); // Valid
service.validateInputFormat("timestamp"); // Valid
```

## Errors

The service performs validation and may throw errors in the following scenarios:

### validateDateParts errors

- **Year should be four digits:** Thrown when the year doesn't have exactly 4 digits (e.g., 999 or 10000).

- **Month should be between 1 and 12:** Thrown when the month is less than 1 or greater than 12.

- **Day should be between 1 and 31:** Thrown when the day is less than 1 or greater than 31.

- **Day X is not valid for {Month}:** Thrown when the day exceeds the maximum number of days for the specified month (e.g., April 31).

- **Day 29 is not valid for February {year} (non-leap year):** Thrown when February 29 is specified for a non-leap year.

```typescript
const service = new ValidateDateService();

service.validateDateParts(2023, 2, 29);
// Throws: "Day 29 is not valid for February 2023 (non-leap year)"

service.validateDateParts(2024, 4, 31);
// Throws: "Day 31 is not valid for April"

service.validateDateParts(99, 1, 15);
// Throws: "Year should be four digits"
```

### validateInputFormat errors

**Invalid input format: {format}:** Thrown when the provided format is not one of the valid formats ("brazilianDate", "isoDate", "timestamp").

```typescript
const service = new ValidateDateService();

service.validateInputFormat("invalidFormat");
// Throws: "Invalid input format: invalidFormat"
```

## Notes

The service uses the standard leap year calculation: a year is a leap year if it is divisible by 4, except for century years which must be divisible by 400. For example, 2000 was a leap year, but 1900 was not.

Each month has its specific day limits validated: January (31), February (28 or 29), March (31), April (30), May (31), June (30), July (31), August (31), September (30), October (31), November (30), December (31).

The year validation requires exactly 4 digits, accepting years from 1000 to 9999. Single, double, or triple-digit years will be rejected.

This service is used internally by other date parsing utilities such as `parseToDate` to ensure input consistency before processing.
