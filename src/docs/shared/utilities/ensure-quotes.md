# ensureQuotes

The `ensureQuotes` function is a utility for ensuring that a string is properly enclosed in quotes. This function checks if the input string is already quoted and adds double quotes if needed, making it useful for formatting strings for JSON, CSV files, or other contexts where quoted strings are required.

## Import

```ts
import { ensureQuotes } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

### `rawValue` (required)

The raw string to be checked and potentially quoted. This can be any string value that needs to be enclosed in quotes.

**Type:** `string`

## Return

The function returns the input string, either unchanged if it is already quoted (with single or double quotes), or wrapped in double quotes if it is not quoted.

**Type:** `string`

## Notes

The function checks for both single quotes (`'`) and double quotes (`"`), preserving whichever type is already present in the string.

The function only adds quotes if the string is completely unquoted. If the string starts and ends with matching quotes (either single or double), it is returned as-is.

When adding quotes, the function always uses double quotes (`"`), following common conventions for JSON and many programming languages.

The function does not validate or handle edge cases like strings that start with one type of quote and end with another, or strings with quotes in the middle but not at both ends.

## Usage Examples

### Add quotes to unquoted string

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("example");

console.log(result);
// Output: "example"
```

### Preserve existing double quotes

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes('"already quoted"');

console.log(result);
// Output: "already quoted"
```

### Preserve existing single quotes

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("'single quoted'");

console.log(result);
// Output: 'single quoted'
```

### Quote an empty string

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("");

console.log(result);
// Output: ""
```

### Quote a string with spaces

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("hello world");

console.log(result);
// Output: "hello world"
```

### Quote a numeric string

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("12345");

console.log(result);
// Output: "12345"
```

### Quote a string with special characters

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("hello@world.com");

console.log(result);
// Output: "hello@world.com"
```

### Preserve already quoted string with content

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes('"John Doe"');

console.log(result);
// Output: "John Doe"
```

### Use in CSV formatting

```typescript
import { ensureQuotes } from "@arkyn/shared";

const fields = ["Name", "Email", "Phone"];
const csvHeader = fields.map(field => ensureQuotes(field)).join(",");

console.log(csvHeader);
// Output: "Name","Email","Phone"
```

### Use in JSON-like string construction

```typescript
import { ensureQuotes } from "@arkyn/shared";

const key = "username";
const value = "john_doe";

const jsonPair = `${ensureQuotes(key)}: ${ensureQuotes(value)}`;

console.log(jsonPair);
// Output: "username": "john_doe"
```

### Quote multiple values

```typescript
import { ensureQuotes } from "@arkyn/shared";

const values = ["apple", "banana", "cherry"];
const quotedValues = values.map(value => ensureQuotes(value));

console.log(quotedValues);
// Output: ['"apple"', '"banana"', '"cherry"']
```

### Handle string with internal quotes

```typescript
import { ensureQuotes } from "@arkyn/shared";

const result = ensureQuotes("It's a test");

console.log(result);
// Output: "It's a test"
```
