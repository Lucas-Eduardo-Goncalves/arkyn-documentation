# validateRg

The `validateRg` function performs basic structural validation of an RG number. It removes non-alphanumeric characters, checks if the length is between 7 and 9 digits, and optionally allows a final letter (check digit).

## Import

```ts
import { validateRg } from "@arkyn/shared";
```

## Parameters

- **rawRg** (`string`): The RG string, which may be formatted.

## Returns

- **(`boolean`)**: Returns `true` if the RG format is considered valid, otherwise, `false`.

## Usage Example

```ts
import { validateRg } from "./validateRg";

validateRg("12,345,678-9"); // true
validateRg("MG-12,345,678"); // false (format not supported)
validateRg("12345678X"); // true
```
