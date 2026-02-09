# isHtml

The `isHtml` function is a utility for detecting whether a string contains HTML markup. This function uses regular expressions to identify HTML tags in a string, making it useful for validating user input, sanitizing content, or determining whether a string needs HTML parsing.

## Import

```ts
import { isHtml } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawString` (required)

The string to be checked for HTML markup. This can be any string value that may or may not contain HTML tags.

**Type:** `string`

## Usage example

The function returns `true` if the string contains HTML markup (opening or closing tags), and `false` if it contains only plain text or is empty.

**Type:** `boolean`

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml("<p>Hello world</p>");

console.log(result);
// Output: true
```

## Notes

The function uses a case-insensitive regular expression that detects both opening tags (e.g., `<div>`, `<p>`) and closing tags (e.g., `</div>`, `</p>`).

The detection pattern matches any valid HTML tag structure, including tags with attributes, self-closing tags, and tags with nested content.

The function only checks for the presence of HTML tags - it does not validate whether the HTML is well-formed or complete.

Empty strings and strings without any angle brackets will return `false`.

The regex pattern `/<?[a-z][\s\S]*>/i` matches any tag that starts with a letter (a-z), allowing for flexibility in detecting various HTML elements.
