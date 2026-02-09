# parseSensitiveData

The `parseSensitiveData` function is a utility for masking sensitive information in JSON strings by replacing the values of specified keys with asterisks. This function is particularly useful for logging, debugging, or displaying data where sensitive information like passwords, credit card numbers, or tokens needs to be hidden.

## Import

```ts
import { parseSensitiveData } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

### `jsonString` (required)

The JSON string to be processed. This should be a valid JSON string that can be parsed into a JavaScript object or array. The function will traverse the entire structure recursively to find and mask sensitive fields.

**Type:** `string`

### `sensitiveKeys` (optional)

An array of key names whose values should be masked. Any field matching one of these key names will have its value replaced with "\*\*\*\*", regardless of where it appears in the JSON structure. The matching is case-sensitive.

**Type:** `string[]`  
**Default:** `["password", "confirmPassword", "creditCard"]`

## Usage Examples

The function returns a JSON string with sensitive data masked. All values of fields matching the sensitive keys are replaced with "\*\*\*\*". If the input is not a valid JSON string, the function returns the original string unchanged.

**Type:** `string`

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret",
  apiKey: "abc123xyz",
  email: "user@example.com",
});

const result = parseSensitiveData(jsonString, ["password", "apiKey"]);

console.log(result);
// Output: '{"username":"user123","password":"****","apiKey":"****","email":"user@example.com"}'
```

## Notes

The function uses a recursive approach to traverse nested objects and arrays, ensuring that all sensitive fields at any depth are masked, including deeply nested structures.

The function can handle nested JSON strings within string values, automatically parsing and masking them as well. This is useful when dealing with serialized JSON data stored as string values.

Non-sensitive fields are preserved unchanged, maintaining the structure and all other data in the JSON.

The masking is case-sensitive, so "Password" and "password" would be treated as different keys unless both are included in the `sensitiveKeys` array.

If the input string cannot be parsed as valid JSON, the function gracefully returns the original string instead of throwing an error, making it safe to use even with potentially invalid data.

Arrays are processed recursively, so sensitive data within array elements is also masked.
