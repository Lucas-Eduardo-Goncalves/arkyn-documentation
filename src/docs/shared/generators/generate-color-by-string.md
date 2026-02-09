# generateColorByString

The `generateColorByString` function is a utility for generating consistent hexadecimal color codes based on input strings. This function is particularly useful for creating unique colors for user avatars, tags, labels, or any UI element that needs consistent color assignment based on text values.

## Import

```ts
import { generateColorByString } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawString` (required)

The input string used to generate the color. The same input string will always produce the same color output, making it predictable and consistent across your application.

**Type:** `string`

## Usage example

The function returns a hexadecimal color code in the format `#RRGGBB`, where RR, GG, and BB are two-digit hexadecimal values representing the red, green, and blue color components respectively.

**Type:** `string`

```typescript
import { generateColorByString } from "@arkyn/shared";

const color = generateColorByString("john_doe");

console.log(color);
// Output: "#5e8f9a" (example - actual color will be consistent for this string)
```

## Notes

The function uses a hash algorithm to convert the input string into a numeric value, which is then used to calculate the RGB color components. This ensures that the same input always produces the same color.

The generated colors cover the full RGB spectrum, meaning you can get any color from `#000000` (black) to `#ffffff` (white), providing a wide variety of possible colors.

The color generation is deterministic - identical strings will always produce identical colors, which is useful for maintaining consistency across different parts of your application or between sessions.

Each character in the input string contributes to the final hash value, so even small changes in the string (like capitalization or adding/removing characters) will result in a different color.
