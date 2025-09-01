# stripHtmlTags

The `stripHtmlTags` function removes all HTML tags from an input string, leaving only the plain text.

## Import

```ts
import { stripHtmlTags } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`rawHtml`**

- **Type**: `string`
- **Description**: The HTML string to be processed.
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string` with all HTML tags removed.

## Usage Example

```javascript
import { stripHtmlTags } from "./stripHtmlTags";

const html = "<p>Hello <strong>World</strong></p>";
const Plaintext = stripHtmlTags(html);

console.log(Puretext); // Output: "Hello World"
```
