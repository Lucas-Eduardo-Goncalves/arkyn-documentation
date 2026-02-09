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

## Usage example

The function returns a new string containing only the numeric characters (0-9) from the input. All other characters including letters, spaces, punctuation, and special characters are removed.

**Type:** `string`

```typescript
import { removeNonNumeric } from "@arkyn/shared";

const result = removeNonNumeric("abc123def456");

console.log(result);
// Output: "123456"
```

## Notes

The function uses a regular expression with the global flag (`/[^0-9]/g`) to remove all non-numeric characters in a single pass.

Only digits 0-9 are preserved - decimal points, commas, minus signs, and plus signs are also removed.

Empty strings will return an empty string, and strings with no numeric characters will also return an empty string.

The function does not validate whether the resulting numeric string is a valid number or within any specific range.
