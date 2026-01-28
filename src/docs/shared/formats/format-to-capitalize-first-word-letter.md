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

## Return

The function returns a formatted string with the first letter of each word capitalized and the remaining letters in lowercase.

## Notes

The function splits the input string by spaces to identify individual words, so multiple consecutive spaces will be preserved in the output.

Each word is processed independently, meaning that the first letter is capitalized regardless of its original case, and all subsequent letters are converted to lowercase.

Empty strings are handled gracefully and will return an empty string without errors.

The function works with any language that uses uppercase and lowercase letters, though results may vary depending on locale-specific capitalization rules.

## Usage Examples

### Format a simple sentence

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "hello world";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Hello World"
```

### Format uppercase text

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "HELLO WORLD";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Hello World"
```

### Format mixed case text

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "hELLO WoRLd";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Hello World"
```

### Format a longer sentence

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "javascript is an amazing language";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Javascript Is An Amazing Language"
```

### Format an empty string

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: ""
```

### Format a single word

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "typescript";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Typescript"
```

### Format text with multiple spaces

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "hello  world  example";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Hello  World  Example"
```

### Format text with special characters

```typescript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const sentence = "hello-world test_case";
const formatted = formatToCapitalizeFirstWordLetter(sentence);

console.log(formatted);
// Output: "Hello-world Test_case"
```
