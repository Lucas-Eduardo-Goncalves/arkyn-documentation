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

## Return

The function returns a string with all HTML tags removed, preserving only the text content between the tags.

**Type:** `string`

## Notes

The function removes HTML tags in a specific order to ensure thorough cleaning: first `<script>` tags, then `<style>` tags, then HTML comments, and finally all other HTML tags.

Script tags (`<script>`) and their entire content are completely removed to prevent any JavaScript code from remaining in the output, enhancing security.

Style tags (`<style>`) and their entire content are also removed to eliminate any CSS styling information.

HTML comments (`<!-- ... -->`) are stripped from the string, removing any developer notes or hidden content.

All remaining HTML tags, including opening tags, closing tags, and self-closing tags, are removed while preserving the text content between them.

The function uses case-insensitive matching, so it will remove tags regardless of their case (e.g., `<DIV>`, `<div>`, `<Div>` are all removed).

The function does not decode HTML entities (e.g., `&nbsp;`, `&lt;`, `&gt;`) - these will remain in the output string.

## Usage Examples

### Strip basic HTML tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<p>Hello <strong>World</strong></p>");

console.log(result);
// Output: "Hello World"
```

### Remove nested HTML tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<div><p>Nested <span>content</span></p></div>");

console.log(result);
// Output: "Nested content"
```

### Strip script tags and content

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<p>Text</p><script>alert('XSS')</script>");

console.log(result);
// Output: "Text"
```

### Remove style tags and content

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<style>body { color: red; }</style><p>Content</p>");

console.log(result);
// Output: "Content"
```

### Strip HTML comments

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("Text <!-- This is a comment --> More text");

console.log(result);
// Output: "Text  More text"
```

### Handle tags with attributes

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags('<div class="container" id="main">Content</div>');

console.log(result);
// Output: "Content"
```

### Strip self-closing tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("Text <br/> New line <img src='image.jpg' />");

console.log(result);
// Output: "Text  New line "
```

### Handle uppercase tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<DIV><P>Content</P></DIV>");

console.log(result);
// Output: "Content"
```

### Handle mixed case tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<DiV>Mixed <SpAn>case</SpAn></DiV>");

console.log(result);
// Output: "Mixed case"
```

### Extract plain text from HTML article

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const html = `
  <article>
    <h1>Article Title</h1>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
  </article>
`;

const plainText = stripHtmlTags(html);

console.log(plainText.trim());
// Output: "Article Title This is the first paragraph. This is the second paragraph."
```

### Handle HTML entities (preserved)

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<p>5 &lt; 10 &amp; 10 &gt; 5</p>");

console.log(result);
// Output: "5 &lt; 10 &amp; 10 &gt; 5"
```

### Clean user input

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const userInput = "<script>alert('XSS')</script><b>Hello</b> World!";
const safeText = stripHtmlTags(userInput);

console.log(safeText);
// Output: "Hello World!"
```

### Handle empty HTML tags

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("<div></div><p></p>Content");

console.log(result);
// Output: "Content"
```

### Strip HTML from multiple strings

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const htmlStrings = [
  "<p>First paragraph</p>",
  "<div><span>Second content</span></div>",
  "<h1>Third heading</h1>"
];

const plainTexts = htmlStrings.map(html => stripHtmlTags(html));

console.log(plainTexts);
// Output: ["First paragraph", "Second content", "Third heading"]
```

### Use in content preview

```typescript
import { stripHtmlTags } from "@arkyn/shared";

function createPreview(htmlContent: string, maxLength: number): string {
  const plainText = stripHtmlTags(htmlContent);
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
}

const html = "<p>This is a <strong>long</strong> article with lots of content.</p>";
const preview = createPreview(html, 20);

console.log(preview);
// Output: "This is a long artic..."
```

### Handle plain text (no tags)

```typescript
import { stripHtmlTags } from "@arkyn/shared";

const result = stripHtmlTags("Plain text without any HTML");

console.log(result);
// Output: "Plain text without any HTML"
```
