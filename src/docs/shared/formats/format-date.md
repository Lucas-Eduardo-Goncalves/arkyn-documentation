# formatDate

The `formatDate` function is a versatile tool for converting and formatting date and time strings from various input formats to a customizable output format.

## Import

```ts
import { formatDate } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`dateTime`**

- **Type**: `[string, string?]`
- **Description**: An array containing the date and, optionally, the time. The first element is the date and the second is the time.
- **Required**: Yes
- **Default**: N/A

**`inputFormat`**

- **Type**: `"brazilianDate" | "isoDate" | "timestamp"`
- **Description**: The format of the input date.
- **Required**: Yes
- **Default**: N/A

**`outputFormat`**

- **Type**: `string`
- **Description**: The desired output format for the date.
- **Required**: Yes
- **Default**: N/A

**`timezone`**

- **Type**: `number`
- **Description**: The time zone offset in hours to apply to the date.
- **Required**: No
- **Default**: `0` (UTC)

### Input Format Types (`inputFormat`)

- **`brazilianDate`**: Expects the date in `DD/MM/YYYY` format.
- **`isoDate`**: Expects the date in `YYYY-MM-DD` format. - **`timestamp`**: Expects the date in `YYYY/MM/DD` format.

### Output Format (`outputFormat`)

You can construct the `outputFormat` string using the following markers:

- `YYYY`: Year with 4 digits (e.g., 2023)
- `YY`: Year with 2 digits (e.g., 23)
- `MM`: Month with 2 digits (01-12)
- `DD`: Day with 2 digits (01-31)
- `hh`: Hour with 2 digits (00-23)
- `mm`: Minute with 2 digits (00-59)
- `ss`: Second with 2 digits (00-59)

## Return

The function returns a `string` with the date formatted according to the `outputFormat` string.

## Errors

The function can generate the following errors:

- `Error("Invalid input format")`: If the provided `inputFormat` is not one of the expected values.

- `Error("Invalid date")`: If the provided date string cannot be converted to a valid date.

## Usage Examples

### Convert Brazilian Date to ISO Format

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(
  ["25/12/2023", "15:30:00"],
  "brazilianDate",
  "YYYY-MM-DD hh:mm:ss"
);

console.log(formatted); // Output: "2023-12-25 15:30:00"
```

### Convert ISO Date with Time Zone Adjustment

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(
  ["2023-12-25", "15:30:00"],
  "isoDate",
  "DD/MM/YYYY hh:mm:ss",
  -3 // Adjustment to UTC-3
);

console.log(formatted);
// Output: "2023-12-25 12:30:00"
```

### Using Only the Date

If no time is provided, the default is "00:00:00".

```javascript
import { formatDate } from "./formatDate";

const formatted = formatDate(["2024-01-05"], "isoDate", "DD/MM/YYYY");

console.log(formatted);
// Output: "05/01/2024"
```
