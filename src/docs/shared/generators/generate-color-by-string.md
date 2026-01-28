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

## Return

The function returns a hexadecimal color code in the format `#RRGGBB`, where RR, GG, and BB are two-digit hexadecimal values representing the red, green, and blue color components respectively.

## Notes

The function uses a hash algorithm to convert the input string into a numeric value, which is then used to calculate the RGB color components. This ensures that the same input always produces the same color.

The generated colors cover the full RGB spectrum, meaning you can get any color from `#000000` (black) to `#ffffff` (white), providing a wide variety of possible colors.

The color generation is deterministic - identical strings will always produce identical colors, which is useful for maintaining consistency across different parts of your application or between sessions.

Each character in the input string contributes to the final hash value, so even small changes in the string (like capitalization or adding/removing characters) will result in a different color.

## Usage Examples

### Generate a color from a username

```typescript
import { generateColorByString } from "@arkyn/shared";

const color = generateColorByString("john_doe");

console.log(color);
// Output: "#5e8f9a" (example - actual color will be consistent for this string)
```

### Generate colors for multiple users

```typescript
import { generateColorByString } from "@arkyn/shared";

const users = ["alice", "bob", "charlie"];
const colors = users.map(user => generateColorByString(user));

console.log(colors);
// Output: ["#a1b2c3", "#d4e5f6", "#7a8b9c"] (example colors)
```

### Use for avatar background colors

```typescript
import { generateColorByString } from "@arkyn/shared";

const username = "jane_smith";
const avatarColor = generateColorByString(username);

console.log(avatarColor);
// Output: "#3f5e7a" (example)
```

### Generate color for tags

```typescript
import { generateColorByString } from "@arkyn/shared";

const tag = "javascript";
const tagColor = generateColorByString(tag);

console.log(tagColor);
// Output: "#9a5e8f" (example)
```

### Consistent colors for the same string

```typescript
import { generateColorByString } from "@arkyn/shared";

const color1 = generateColorByString("example");
const color2 = generateColorByString("example");

console.log(color1 === color2);
// Output: true
```

### Different colors for different strings

```typescript
import { generateColorByString } from "@arkyn/shared";

const color1 = generateColorByString("example");
const color2 = generateColorByString("Example");

console.log(color1 === color2);
// Output: false (capitalization matters)
```

### Generate color from email

```typescript
import { generateColorByString } from "@arkyn/shared";

const email = "user@example.com";
const color = generateColorByString(email);

console.log(color);
// Output: "#2b4c6d" (example)
```

### Generate color from empty string

```typescript
import { generateColorByString } from "@arkyn/shared";

const color = generateColorByString("");

console.log(color);
// Output: "#000000"
```

### Use in React component

```typescript
import { generateColorByString } from "@arkyn/shared";

function UserAvatar({ username }: { username: string }) {
  const backgroundColor = generateColorByString(username);

  return (
    <div style={{ backgroundColor, width: 40, height: 40, borderRadius: "50%" }}>
      {username.charAt(0).toUpperCase()}
    </div>
  );
}
```

### Generate colors for categories

```typescript
import { generateColorByString } from "@arkyn/shared";

const categories = ["Technology", "Science", "Arts", "Sports"];
const categoryColors = categories.reduce((acc, category) => {
  acc[category] = generateColorByString(category);
  return acc;
}, {} as Record<string, string>);

console.log(categoryColors);
// Output: {
//   "Technology": "#a1b2c3",
//   "Science": "#d4e5f6",
//   "Arts": "#7a8b9c",
//   "Sports": "#3f5e7a"
// } (example colors)
```
