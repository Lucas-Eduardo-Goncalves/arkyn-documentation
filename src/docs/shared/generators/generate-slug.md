# generateSlug

The `generateSlug` function is a utility for converting strings into URL-friendly slugs. This function is particularly useful for creating clean, readable URLs from titles, names, or any text content that needs to be used in web addresses.

## Import

```ts
import { generateSlug } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawString` (required)

The input string to be converted into a slug. This can be any text content, including strings with special characters, accents, spaces, and punctuation marks. The function will transform it into a clean, URL-safe format.

**Type:** `string`

## Usage example

The function returns a URL-friendly slug string with all transformations applied, including lowercase conversion, accent removal, and hyphen separation.

**Type:** `string`

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Hello, World! This is a Test.");

console.log(slug);
// Output: "hello-world-this-is-a-test"
```

## Notes

The function uses Unicode normalization (NFD - Canonical Decomposition) to separate base characters from their diacritical marks, then removes the diacritical marks. This effectively converts accented characters to their unaccented equivalents (e.g., "é" becomes "e", "ñ" becomes "n").

All non-alphanumeric characters except spaces and hyphens are removed, ensuring the slug contains only letters, numbers, and hyphens.

Multiple consecutive spaces are collapsed into a single hyphen, and multiple consecutive hyphens are collapsed into a single hyphen, preventing awkward sequences in the final slug.

Leading and trailing hyphens are automatically removed to ensure clean, professional-looking URLs.

The function converts all characters to lowercase, following the standard convention for URL slugs.
