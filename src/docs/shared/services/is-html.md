# isHtml

The `isHtml` function checks if a string contains HTML markup. It uses a regular expression to detect the presence of HTML tags in a string. The verification is case-insensitive and detects both opening and closing tags.

## Import

```ts
import { isHtml } from "@arkyn/shared";
```

## Parameters

- **str** (`string`): The string to be verified.

## Returns

- **(`boolean`)**: `true` if the string contains HTML markup, `false` otherwise.

## Examples

```typescript
isHtml("<p>Hello world</p>"); // true
isHtml("<div>Content</div>"); // true
isHtml("Plain text"); // false
isHtml("Text with <b>bold</b>"); // true
isHtml(""); // false
```

## Usage

This function is useful for:

- Validating user input that should or should not contain HTML
- Determining whether content needs HTML sanitization
- Conditional rendering based on content type
- Security checks before processing string content
