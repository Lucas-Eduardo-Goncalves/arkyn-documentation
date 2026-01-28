# ValidateDateService

The `ValidateDateService` class is a utility service for validating date components and input formats. This service provides methods to validate date parts (year, month, day) and input format strings used in date parsing operations, including leap year validation and month-specific day validation.

## Import

```ts
import { ValidateDateService } from "@arkyn/shared";
```

## Constructor

The class has a default constructor that requires no parameters.

```typescript
const service = new ValidateDateService();
```

## Methods

### `validateDateParts`

Validates the components of a date (year, month, and day).

#### Parameters

**`year`** (required) - The year to validate. Must be exactly 4 digits (1000-9999).

**Type:** `number`

**`month`** (required) - The month to validate. Must be between 1 and 12.

**Type:** `number`

**`day`** (required) - The day to validate. Must be between 1 and 31, and must be valid for the specific month.

**Type:** `number`

#### Errors

**Invalid year:** An error is thrown when the year doesn't have exactly 4 digits. The error message is "Year should be four digits".

**Invalid month:** An error is thrown when the month is not between 1 and 12. The error message is "Month should be between 1 and 12".

**Invalid day range:** An error is thrown when the day is not between 1 and 31. The error message is "Day should be between 1 and 31".

**Invalid day for month:** An error is thrown when the day is invalid for the specific month (e.g., February 30, April 31). For February in non-leap years, the error includes the year and notes it's a non-leap year.

### `validateInputFormat`

Validates that a given format string is supported.

#### Parameters

**`format`** (required) - The format string to validate. Must be one of the valid date format strings.

**Type:** `string`

#### Errors

**Invalid format:** An error is thrown when the format is not one of the supported formats. The error message includes the invalid format provided: "Invalid input format: {format}".

## Notes

The service validates year values to ensure they are exactly 4 digits, preventing invalid years like 999 or 10000.

Month validation ensures values are between 1 and 12, following the standard calendar convention.

Day validation is two-stage: first checking the general range (1-31), then validating against the specific month's maximum days.

The service includes intelligent leap year detection following the standard rules: divisible by 4 but not by 100, unless also divisible by 400.

Each month has specific day limits: January, March, May, July, August, October, and December have 31 days; April, June, September, and November have 30 days; February has 28 or 29 days depending on leap year status.

Valid input formats are "brazilianDate" (DD/MM/YYYY), "isoDate" (MM-DD-YYYY), and "timestamp" (YYYY-MM-DD).

## Usage Examples

### Validate a valid date

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();
service.validateDateParts(2024, 1, 15);

// No error thrown - valid date
```

### Validate a leap year date

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();
service.validateDateParts(2024, 2, 29);

// No error thrown - 2024 is a leap year
```

### Validate an invalid leap year date

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateDateParts(2023, 2, 29);
} catch (error) {
  console.error(error);
  // Output: Error: Day 29 is not valid for February 2023 (non-leap year)
}
```

### Validate an invalid day for month

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateDateParts(2024, 4, 31);
} catch (error) {
  console.error(error);
  // Output: Error: Day 31 is not valid for April
}
```

### Validate an invalid year

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateDateParts(999, 1, 15);
} catch (error) {
  console.error(error);
  // Output: Error: Year should be four digits
}
```

### Validate an invalid month

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateDateParts(2024, 13, 15);
} catch (error) {
  console.error(error);
  // Output: Error: Month should be between 1 and 12
}
```

### Validate an invalid day range

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateDateParts(2024, 1, 32);
} catch (error) {
  console.error(error);
  // Output: Error: Day should be between 1 and 31
}
```

### Validate a valid input format

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();
service.validateInputFormat("brazilianDate");

// No error thrown - valid format
```

### Validate all valid input formats

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

service.validateInputFormat("brazilianDate"); // Valid
service.validateInputFormat("isoDate"); // Valid
service.validateInputFormat("timestamp"); // Valid
```

### Validate an invalid input format

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

try {
  service.validateInputFormat("customFormat");
} catch (error) {
  console.error(error);
  // Output: Error: Invalid input format: customFormat
}
```

### Validate February in different years

```typescript
import { ValidateDateService } from "@arkyn/shared";

const service = new ValidateDateService();

// Leap year
service.validateDateParts(2024, 2, 29); // Valid

// Non-leap year
try {
  service.validateDateParts(2023, 2, 29);
} catch (error) {
  console.error(error);
  // Output: Error: Day 29 is not valid for February 2023 (non-leap year)
}

// Valid non-leap year date
service.validateDateParts(2023, 2, 28); // Valid
```

### Use in a date parsing function

```typescript
import { ValidateDateService } from "@arkyn/shared";

function parseDate(dateString: string, format: string): Date {
  const service = new ValidateDateService();

  // Validate format first
  service.validateInputFormat(format);

  // Parse date components
  const parts = dateString.split(/[-/]/).map(Number);
  const [year, month, day] = parts;

  // Validate date parts
  service.validateDateParts(year, month, day);

  return new Date(year, month - 1, day);
}

const date = parseDate("2024-01-15", "timestamp");
console.log(date);
```
