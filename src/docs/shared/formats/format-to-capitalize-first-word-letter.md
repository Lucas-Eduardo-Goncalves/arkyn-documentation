# formatToCapitalizeFirstWordLetter

The `formatToCapitalizeFirstWordLetter` function receives a string and capitalizes the first letter of each word, keeping the remaining letters lowercase. Words are separated by spaces.

## Import

```ts
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`sentence`**

- **Type**: `string`
- **Description**: The sentence to be formatted.
- **Required**: Yes
- **Default**: N/A

## Return

The function returns a `string` with the formatted sentence, where the first letter of each word is capitalized.

## Usage Example

### Basic Formatting

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hello world");
console.log(formatted); // Output: "Hello World"
```

### With Capitalized Text

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("HELLO WORLD");
console.log(formatted); // Output: "Hello World"
```

### With Mixed Text

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hELLO WoRLd");
console.log(formatted); // Output: "Hello World"
```

### With Multiple Words

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter(
  "javascript is an amazing language"
);
console.log(formatted); // Output: "Javascript Is An Amazing Language"
```

### Empty String

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("");
console.log(formatted); // Exit: ""
```
