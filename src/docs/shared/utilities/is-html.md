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

## Return

The function returns `true` if the string contains HTML markup (opening or closing tags), and `false` if it contains only plain text or is empty.

**Type:** `boolean`

## Notes

The function uses a case-insensitive regular expression that detects both opening tags (e.g., `<div>`, `<p>`) and closing tags (e.g., `</div>`, `</p>`).

The detection pattern matches any valid HTML tag structure, including tags with attributes, self-closing tags, and tags with nested content.

The function only checks for the presence of HTML tags - it does not validate whether the HTML is well-formed or complete.

Empty strings and strings without any angle brackets will return `false`.

The regex pattern `/<?[a-z][\s\S]*>/i` matches any tag that starts with a letter (a-z), allowing for flexibility in detecting various HTML elements.

## Usage Examples

### Detect simple HTML paragraph

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<p>Hello world</p>');

console.log(result);
// Output: true
```

### Detect HTML div

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<div>Content</div>');

console.log(result);
// Output: true
```

### Detect plain text

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('Plain text');

console.log(result);
// Output: false
```

### Detect empty string

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('');

console.log(result);
// Output: false
```

### Detect HTML with attributes

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<div class="container">Content</div>');

console.log(result);
// Output: true
```

### Detect self-closing tag

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<img src="image.jpg" />');

console.log(result);
// Output: true
```

### Detect opening tag only

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<span>');

console.log(result);
// Output: true
```

### Detect closing tag only

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('</div>');

console.log(result);
// Output: true
```

### Detect nested HTML

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<div><p>Nested content</p></div>');

console.log(result);
// Output: true
```

### Detect HTML with inline styles

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<p style="color: red;">Styled text</p>');

console.log(result);
// Output: true
```

### Detect uppercase HTML tags

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<DIV>Content</DIV>');

console.log(result);
// Output: true
```

### Detect mixed case HTML tags

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('<DiV>Content</dIv>');

console.log(result);
// Output: true
```

### String with angle brackets but not HTML

```typescript
import { isHtml } from "@arkyn/shared";

const result = isHtml('5 < 10 and 10 > 5');

console.log(result);
// Output: false
```

### Validate user input before rendering

```typescript
import { isHtml } from "@arkyn/shared";

function renderContent(content: string) {
  if (isHtml(content)) {
    // Sanitize or parse HTML
    return { type: 'html', content };
  } else {
    // Treat as plain text
    return { type: 'text', content };
  }
}

const htmlContent = renderContent('<p>Hello</p>');
const textContent = renderContent('Hello');

console.log(htmlContent);
// Output: { type: 'html', content: '<p>Hello</p>' }

console.log(textContent);
// Output: { type: 'text', content: 'Hello' }
```

### Use in content filtering

```typescript
import { isHtml } from "@arkyn/shared";

const comments = [
  "This is a plain comment",
  "<script>alert('xss')</script>",
  "Another safe comment",
  "<b>Bold text</b>"
];

const suspiciousComments = comments.filter(comment => isHtml(comment));

console.log(suspiciousComments);
// Output: ["<script>alert('xss')</script>", "<b>Bold text</b>"]
```

### Check before HTML parsing

```typescript
import { isHtml } from "@arkyn/shared";

function processContent(content: string) {
  if (isHtml(content)) {
    // Use HTML parser
    console.log("Processing as HTML");
  } else {
    // Use plain text processor
    console.log("Processing as plain text");
  }
}

processContent("<div>HTML content</div>");
// Output: "Processing as HTML"

processContent("Plain text content");
// Output: "Processing as plain text"
```
