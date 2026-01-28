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

## Return

The function returns a URL-friendly slug string with all transformations applied, including lowercase conversion, accent removal, and hyphen separation.

## Notes

The function uses Unicode normalization (NFD - Canonical Decomposition) to separate base characters from their diacritical marks, then removes the diacritical marks. This effectively converts accented characters to their unaccented equivalents (e.g., "é" becomes "e", "ñ" becomes "n").

All non-alphanumeric characters except spaces and hyphens are removed, ensuring the slug contains only letters, numbers, and hyphens.

Multiple consecutive spaces are collapsed into a single hyphen, and multiple consecutive hyphens are collapsed into a single hyphen, preventing awkward sequences in the final slug.

Leading and trailing hyphens are automatically removed to ensure clean, professional-looking URLs.

The function converts all characters to lowercase, following the standard convention for URL slugs.

## Usage Examples

### Generate a simple slug

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Hello, World! This is a Test.");

console.log(slug);
// Output: "hello-world-this-is-a-test"
```

### Generate slug from text with accents

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Café com Açúcar");

console.log(slug);
// Output: "cafe-com-acucar"
```

### Generate slug from text with special characters

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("React & Node.js: Best Practices!");

console.log(slug);
// Output: "react-nodejs-best-practices"
```

### Generate slug with multiple spaces

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Hello    World    Test");

console.log(slug);
// Output: "hello-world-test"
```

### Generate slug with existing hyphens

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("front-end development");

console.log(slug);
// Output: "front-end-development"
```

### Generate slug from uppercase text

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("JAVASCRIPT TUTORIAL");

console.log(slug);
// Output: "javascript-tutorial"
```

### Generate slug from mixed case text

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("TypeScript Best Practices");

console.log(slug);
// Output: "typescript-best-practices"
```

### Handle leading and trailing spaces

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("  Hello World  ");

console.log(slug);
// Output: "hello-world"
```

### Handle leading and trailing hyphens

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("---Hello World---");

console.log(slug);
// Output: "hello-world"
```

### Generate slug from text with numbers

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Top 10 JavaScript Tips");

console.log(slug);
// Output: "top-10-javascript-tips"
```

### Generate slug for blog post title

```typescript
import { generateSlug } from "@arkyn/shared";

const title = "How to Build a RESTful API with Node.js";
const slug = generateSlug(title);

console.log(slug);
// Output: "how-to-build-a-restful-api-with-nodejs"
```

### Generate slug from non-English text

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("Programación en Español");

console.log(slug);
// Output: "programacion-en-espanol"
```

### Handle empty string

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("");

console.log(slug);
// Output: ""
```

### Generate slug with only special characters

```typescript
import { generateSlug } from "@arkyn/shared";

const slug = generateSlug("!@#$%^&*()");

console.log(slug);
// Output: ""
```
