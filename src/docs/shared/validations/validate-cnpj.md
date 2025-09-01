# validateCnpj

The `validateCnpj` function validates a CNPJ number. It sanitizes it (removing non-numeric characters), checks the length (must be 14 digits), checks for repeated digits, and validates the two check digits.

## Import

```ts
import { validateCnpj } from "@arkyn/shared";
```

## Parameters

- **rawCnpj** (`string`): The CNPJ string, which can be formatted.

## Returns

- **(`boolean`)**: Returns `true` if the CNPJ is valid; otherwise, `false`.

## Usage Example

```ts
import { validateCnpj } from "./validateCnpj";

validateCnpj("12.345.678/0001-95"); // false
validateCnpj("11.444.777/0001-61"); // true
```
