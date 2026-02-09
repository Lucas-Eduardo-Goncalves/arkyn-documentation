# stripHtmlTags

The `stripHtmlTags` function is a utility for removing HTML tags from a string. This function uses regular expressions to strip out HTML markup while preserving the text content, making it useful for sanitizing user input, extracting plain text from HTML, or preparing content for text-only displays.

## Import

```ts
import { stripHtmlTags } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawHtml` (required)

The HTML string to be processed. This can be any string containing HTML markup that needs to be converted to plain text.

**Type:** `string`

## Usage example

The function returns a string with all HTML tags removed, preserving only the text content between the tags.

**Type:** `string`

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<p>Hello <strong>World</strong></p>");

console.log(result);
// Output: "Hello World"
```

## Notes

The function removes HTML tags in a specific order to ensure thorough cleaning: first `<script>` tags, then `<style>` tags, then HTML comments, and finally all other HTML tags.

Script tags (`<script>`) and their entire content are completely removed to prevent any JavaScript code from remaining in the output, enhancing security.

Style tags (`<style>`) and their entire content are also removed to eliminate any CSS styling information.

HTML comments (`<!-- ... -->`) are stripped from the string, removing any developer notes or hidden content.

All remaining HTML tags, including opening tags, closing tags, and self-closing tags, are removed while preserving the text content between them.

The function uses case-insensitive matching, so it will remove tags regardless of their case (e.g., `<DIV>`, `<div>`, `<Div>` are all removed).

The function does not decode HTML entities (e.g., `&nbsp;`, `&lt;`, `&gt;`) - these will remain in the output string.
