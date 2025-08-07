---
title: formatToCapitalizeFirstWordLetter
description: Formats a sentence by capitalizing the first letter of each word.
---

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

### Example 1: Basic Formatting

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hello world");
console.log(formatted); // Output: "Hello World"
```

### Example 2: With Capitalized Text

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("HELLO WORLD");
console.log(formatted); // Output: "Hello World"
```

### Example 3: With Mixed Text

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("hELLO WoRLd");
console.log(formatted); // Output: "Hello World"
```

### Example 4: With Multiple Words

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter(
  "javascript is an amazing language"
);
console.log(formatted); // Output: "Javascript Is An Amazing Language"
```

### Example 5: Empty String

```javascript
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";

const formatted = formatToCapitalizeFirstWordLetter("");
console.log(formatted); // Exit: ""
```
