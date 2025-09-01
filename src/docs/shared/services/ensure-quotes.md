# ensureQuotes

The `ensureQuotes` function checks if an input string is already enclosed in quotes (single or double). If not, the function wraps it in double quotes.

## Import

```ts
import { ensureQuotes } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameter:

**`rawValue`**

- **Type**: `string`
- **Description**: The input string to be checked and potentially enclosed in quotes.
- **Required**: Yes
- **Default**: N/A

## Returns

The function returns a `string`. If the input string is already enclosed in quotes, it is returned unchanged. Otherwise, it is returned enclosed in double quotes.

## Usage Example

### String without Quotes

```javascript
import { ensureQuotes } from ". sureQuotes";

const result = ensureQuotes("my-value");
console.log(result); // Output: "\"my-value\""
```

### String with Double Quotes

```javascript
import { ensureQuotes } from ". sureQuotes";

const result = ensureQuotes('"my-value"');
console.log(result); // Output: '"my-value"'
```

### String with Single Quotes

```javascript
import { ensureQuotes } from ". sureQuotes";

const result = ensureQuotes("'my-value'");
console.log(result); // Output: "'my-value'"
```
