# formatToEllipsis

The `formatToEllipsis` function is a utility for truncating text strings to a specified maximum length while preserving word boundaries and appending an ellipsis ("...") to indicate truncation. This function is particularly useful for displaying shortened text in UI components where space is limited.

## Import

```ts
import { formatToEllipsis } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `text` (required)

The input string to be truncated. This can be any text content that needs to be shortened while maintaining readability and proper word boundaries.

**Type:** `string`

### `maxLength` (required)

The maximum allowed length of the string before truncation. If the input text exceeds this length, it will be truncated and an ellipsis will be appended. The ellipsis is not included in the character count of `maxLength`.

**Type:** `number`

## Usage example

The function returns the original string if it does not exceed the maximum length, or a truncated string with an ellipsis ("...") appended if it does exceed the limit. The truncation is smart and attempts to break at word boundaries rather than mid-word.

**Type:** `string`

```typescript
import { formatToEllipsis } from "@arkyn/shared";

const result = formatToEllipsis("Hello, world!", 5);

console.log(result);
// Output: "Hello..."
```

## Notes

The function intelligently finds the last space before the maximum length to avoid breaking words in the middle, ensuring more readable truncated text.

After truncation, any trailing punctuation marks (spaces, periods, commas, exclamation marks, question marks, semicolons, and colons) are automatically removed before appending the ellipsis, preventing awkward formatting like "Hello,..." or "World!...".

If the truncated text becomes empty or contains only punctuation and spaces after removing trailing punctuation, the function returns just "..." to avoid meaningless output.

The ellipsis ("...") is always appended to truncated text and is not included in the `maxLength` calculation, meaning the final output may be slightly longer than the specified maximum length.
