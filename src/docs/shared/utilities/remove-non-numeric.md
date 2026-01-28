# removeNonNumeric

The `removeNonNumeric` function is a utility for removing all non-numeric characters from a string. This function uses regular expressions to strip out any characters that are not digits (0-9), making it useful for cleaning user input, parsing numeric values from formatted strings, or preparing data for numeric operations.

## Import

```ts
import { removeNonNumeric } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawString` (required)

The input string from which non-numeric characters will be removed. This can be any string containing a mix of numeric and non-numeric characters.

**Type:** `string`

## Return

The function returns a new string containing only the numeric characters (0-9) from the input. All other characters including letters, spaces, punctuation, and special characters are removed.

**Type:** `string`

## Notes

The function uses a regular expression with the global flag (`/[^0-9]/g`) to remove all non-numeric characters in a single pass.

Only digits 0-9 are preserved - decimal points, commas, minus signs, and plus signs are also removed.

Empty strings will return an empty string, and strings with no numeric characters will also return an empty string.

The function does not validate whether the resulting numeric string is a valid number or within any specific range.

## Usage Examples

### Remove letters and keep numbers

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("abc123def456");

console.log(result);
// Output: "123456"
```

### Clean a phone number

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("(123) 456-7890");

console.log(result);
// Output: "1234567890"
```

### Remove formatting from CPF

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("123.456.789-09");

console.log(result);
// Output: "12345678909"
```

### Clean credit card number

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("1234 5678 9012 3456");

console.log(result);
// Output: "1234567890123456"
```

### Remove currency formatting

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("R$ 1.234,56");

console.log(result);
// Output: "123456"
```

### Handle string with only letters

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("abcdef");

console.log(result);
// Output: ""
```

### Handle empty string

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("");

console.log(result);
// Output: ""
```

### Remove special characters

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("Order #12345!");

console.log(result);
// Output: "12345"
```

### Clean postal code

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("12345-678");

console.log(result);
// Output: "12345678"
```

### Remove decimal points

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("123.45");

console.log(result);
// Output: "12345"
```

### Handle mixed content

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("ID: 456, Code: 789");

console.log(result);
// Output: "456789"
```

### Clean multiple inputs

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const inputs = ["(11) 98765-4321", "123.456.789-00", "R$ 1.000,00"];
const cleanInputs = inputs.map(input => removeNonNumeric(input));

console.log(cleanInputs);
// Output: ["11987654321", "12345678900", "100000"]
```

### Validate numeric input

```typescript
import { removeNonNumeric } from "@arkyn/shared";

function getNumericValue(input: string): number {
  const numeric = removeNonNumeric(input);
  return numeric ? parseInt(numeric, 10) : 0;
}

console.log(getNumericValue("Price: $123"));
// Output: 123

console.log(getNumericValue("No numbers here"));
// Output: 0
```

### Extract year from date string

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const dateString = "Date: 25/12/2023";
const allDigits = removeNonNumeric(dateString);

console.log(allDigits);
// Output: "25122023"
```

### Use in form validation

```typescript
import { removeNonNumeric } from "@arkyn/shared";

function validateCPF(cpf: string): boolean {
  const numericCPF = removeNonNumeric(cpf);
  return numericCPF.length === 11;
}

console.log(validateCPF("123.456.789-09"));
// Output: true

console.log(validateCPF("123.456.789"));
// Output: false
```
