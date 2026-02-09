# formatToCapitalizeFirstWordLetter

The `formatToCapitalizeFirstWordLetter` function is a utility for formatting sentences by capitalizing the first letter of each word while converting the remaining letters to lowercase, creating a title case format.

## Import

```ts
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `sentence` (required)

The sentence to be formatted. This can be any string containing one or more words separated by spaces. The function will process each word individually, capitalizing its first letter and converting the rest to lowercase.

**Type:** `string`

## Usage example

The function returns a formatted string with the first letter of each word capitalized and the remaining letters in lowercase.

**Type:** `string`

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted1 = formatToCapitalizeFirstWordLetter("hello world");
const formatted2 = formatToCapitalizeFirstWordLetter("HELLO WORLD");
const formatted3 = formatToCapitalizeFirstWordLetter("hELLO WoRLd");

console.log(formatted1); // Output: "Hello World"
console.log(formatted2); // Output: "Hello World"
console.log(formatted3); // Output: "Hello World"
```

## Notes

The function splits the input string by spaces to identify individual words, so multiple consecutive spaces will be preserved in the output.

Each word is processed independently, meaning that the first letter is capitalized regardless of its original case, and all subsequent letters are converted to lowercase.

Empty strings are handled gracefully and will return an empty string without errors.

The function works with any language that uses uppercase and lowercase letters, though results may vary depending on locale-specific capitalization rules.
