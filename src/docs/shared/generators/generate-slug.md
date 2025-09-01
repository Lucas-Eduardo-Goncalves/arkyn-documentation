# generateSlug

The `generateSlug` function converts an input string into a URL-friendly slug, performing a series of transformations to ensure the result is clean and suitable for use in web addresses.

## Import

```ts
import { generateSlug } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`prop`**

- **Type**: `string`
- **Description**: The input string to be converted to a slug.
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string` that is the URL-friendly slug derived from the input string.

## Transformation Process

1. **Normalization**: Removes accents and other diacritical characters.
2. **Character Removal**: Eliminates non-alphanumeric characters, except spaces and hyphens.
3. **Space Replacement**: Replaces one or more spaces with a single hyphen.
4. **Lowercase**: Converts the entire string to lowercase.
5. **Hyphen Cleaning**: Removes duplicate hyphens, as well as hyphens at the beginning or end of the string.

## Usage Example

```javascript
import { generateSlug } from "./generateSlug";

const text = "Example Title with Accents and Spaces!! ";
const slug = generateSlug(text);

console.log(slug); // Output: "example-of-title-with-accent-and-spaces"
```
