# formatToDate

The `formatToDate` function converts a date string (with optional time) from various formats to a JavaScript `Date` object, applying a time zone adjustment.

## Import

```ts
import { formatToDate } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`dateTime`**

- **Type**: `[string, string?]`
- **Description**: An array containing the date string and, optionally, the time string. The default time is "00:00:00".
- **Required**: Yes
- **Default**: N/A

**`inputFormat`**

- **Type**: `"brazilianDate" | "isoDate" | "timestamp"
- **Description**: The format of the input date string.
- **Required**: Yes
- **Default**: N/A

**`timezone`** (optional)

- **Type**: `number`
- **Description**: The time zone offset in hours. Default is `0` (UTC).
- **Required**: No
- **Default**: `0`

### Input Format Types (`inputFormat`)

- **`brazilianDate`**: Expects the date in `DD/MM/YYYY` format.
- **`isoDate`**: Expects the date in `YYYY-MM-DD` format.
- **`timestamp`**: Expects the date in `YYYY-MM-DD` format.

## Returns

The function returns a JavaScript `Date` object representing the parsed date and time, adjusted for the specified time zone.

## Errors

The function can generate the following errors:

- `Error("Invalid input format")`: If the provided `inputFormat` is invalid.
- `Error("Invalid date")`: If the provided date or time is invalid.

## Usage Example

### Convert Brazilian Date with Time Zone

```javascript
import { formatToDate } from "./formatToDate";

// Converts the date to a Date object, considering the UTC-3 time zone
const date = formatToDate(["25/12/2023", "15:30:00"], "brazilianDate", -3);

console.log(date.toISOString());
// Output: "2023-12-25T18:30:00.000Z"
```

### Convert ISO Date (UTC)

```javascript
import { formatToDate } from "./formatToDate";

const date = formatToDate(["2023-12-25"], "isoDate");

console.log(date.toISOString());
// Output: "2023-12-25T00:00:00.000Z"
```
