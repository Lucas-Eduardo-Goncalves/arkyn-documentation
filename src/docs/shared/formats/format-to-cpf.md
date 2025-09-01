# formatToCpf

The `formatToCpf` function removes all non-numeric characters from a string and formats it as a CPF (Individual Taxpayer Registry) in the `XXX.XXX.XXX-XX` pattern.

## Import

```ts
import { formatToCpf } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`value`**

- **Type**: `string`
- **Description**: The input string to be formatted as a CPF (Individual Taxpayer Registry).
- **Required**: Yes
- **Default**: N/A

## Return

The function returns a `string` with the CPF (Individual Taxpayer Registry) formatted in the `XXX.XXX.XXX-XX` pattern.

## Errors

The function may generate the following error:

- `Error("Invalid CPF format")`: If the input string, after removing non-numeric characters, does not have 11 digits.

## Usage Example

### Formatting a Valid CPF

```javascript
import { formatToCpf } from "./formatToCpf";

const formattedCpf = formatToCpf("12345678909");
console.log(formattedCpf); // Output: "123.456.789-09"
```

### Handling an Invalid CPF

```javascript
import { formatToCpf } from "./formatToCpf";

try {
  formatToCpf("12345");
} catch (error) {
  console.error(error.message); // Output: "Invalid CPF format"
}
```
