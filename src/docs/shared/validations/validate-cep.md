# validateCep

The `validateCep` function checks if a Brazilian ZIP code is valid. A valid ZIP code must contain 8 numeric digits. The function removes non-numeric characters before validation.

## Import

```ts
import { validateCep } from "@arkyn/shared";
```

## Parameters

- **rawCep** (`string`): The ZIP code string, which can contain formatting (e.g., "12345-678").

## Returns

- **(`boolean`)**: Returns `true` if the ZIP code is valid, otherwise `false`.

## Usage Example

```ts
import { validateCep } from "./validateCep";

validateCep("12345-678"); // true
validateCep("12345678"); // true
validateCep("ABCDE-123"); // false
```
