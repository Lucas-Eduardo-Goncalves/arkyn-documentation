# ensureQuotes

The `ensureQuotes` function is a utility for ensuring that a string is properly enclosed in quotes. This function checks if the input string is already quoted and adds double quotes if needed, making it useful for formatting strings for JSON, CSV files, or other contexts where quoted strings are required.

## Import

```ts
import { ensureQuotes } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawValue` (required)

The raw string to be checked and potentially quoted. This can be any string value that needs to be enclosed in quotes.

**Type:** `string`

## Usage example

The function returns the input string, either unchanged if it is already quoted (with single or double quotes), or wrapped in double quotes if it is not quoted.

**Type:** `string`

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result1 = ensureQuotes("example");
const result2 = ensureQuotes('"already quoted"');

console.log(result1); // Output: "example"
console.log(result2); // Output: "already quoted"
```

## Notes

The function checks for both single quotes (`'`) and double quotes (`"`), preserving whichever type is already present in the string.

The function only adds quotes if the string is completely unquoted. If the string starts and ends with matching quotes (either single or double), it is returned as-is.

When adding quotes, the function always uses double quotes (`"`), following common conventions for JSON and many programming languages.

The function does not validate or handle edge cases like strings that start with one type of quote and end with another, or strings with quotes in the middle but not at both ends.
