# validateCpf

The `validateCpf` function validates a CPF number. It removes non-numeric characters, checks the length (11 digits), ensures that the digits are not all the same, and calculates the check digits to confirm validity.

## Import

```ts
import { validateCpf } from "@arkyn/shared";
```

## Parameters

- **rawCpf** (`string`): The CPF string, which can include formatting.

## Returns

- **(`boolean`)**: Returns `true` if the CPF is valid, otherwise `false`.

## Usage Example

```ts
import { validateCpf } from "./validateCpf";

validateCpf("123.456.789-09"); // false
validateCpf("111.444.777-35"); // true
```
