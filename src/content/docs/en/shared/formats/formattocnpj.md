---
title: formatToCnpj
description: Formats a string into the CNPJ (National Registry of Legal Entities) format.
---

The `formatToCnpj` function removes all non-numeric characters from a string and formats it as a CNPJ in the `XX.XXX.XXX/XXXX-XX` pattern.

## Import

```ts
import { formatToCnpj } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`value`**

- **Type**: `string`
- **Description**: The input string to be formatted as a CNPJ. - **Required**: Yes
- **Default**: N/A

## Return

The function returns a string with the CNPJ formatted in the `XX.XXX.XXX/XXXX-XX` pattern.

## Errors

The function may generate the following error:

- `Error("Invalid CNPJ length")`: If the input string, after removing non-numeric characters, does not have 14 digits.

## Usage Example

### Example 1: Formatting a Valid CNPJ

```javascript
import { formatToCnpj } from "./formatToCnpj";

const formattedCnpj = formatToCnpj("12345678000195");
console.log(formattedCnpj); // Output: "12,345,678/0001-95"
```

### Example 2: Dealing with an Invalid CNPJ (National Taxpayer Registry)

```javascript
import { formatToCnpj } from "./formatToCnpj";

try {
  formatToCnpj("12345");
} catch (error) {
  console.error(error.message); // Output: "Invalid CNPJ length"
}
```
