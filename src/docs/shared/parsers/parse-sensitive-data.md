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

## Return

The function returns a JSON string with sensitive data masked. All values of fields matching the sensitive keys are replaced with "\*\*\*\*". If the input is not a valid JSON string, the function returns the original string unchanged.

## Notes

The function uses a recursive approach to traverse nested objects and arrays, ensuring that all sensitive fields at any depth are masked, including deeply nested structures.

The function can handle nested JSON strings within string values, automatically parsing and masking them as well. This is useful when dealing with serialized JSON data stored as string values.

Non-sensitive fields are preserved unchanged, maintaining the structure and all other data in the JSON.

The masking is case-sensitive, so "Password" and "password" would be treated as different keys unless both are included in the `sensitiveKeys` array.

If the input string cannot be parsed as valid JSON, the function gracefully returns the original string instead of throwing an error, making it safe to use even with potentially invalid data.

Arrays are processed recursively, so sensitive data within array elements is also masked.

## Usage Examples

### Mask default sensitive fields

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret123",
  email: "user@example.com"
});

const result = parseSensitiveData(jsonString);

console.log(result);
// Output: '{"username":"user123","password":"****","email":"user@example.com"}'
```

### Mask custom sensitive fields

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret",
  apiKey: "abc123xyz",
  email: "user@example.com"
});

const result = parseSensitiveData(jsonString, ["password", "apiKey"]);

console.log(result);
// Output: '{"username":"user123","password":"****","apiKey":"****","email":"user@example.com"}'
```

### Mask nested sensitive data

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret",
  profile: {
    creditCard: "1234-5678-9012-3456",
    address: "123 Main St"
  }
});

const result = parseSensitiveData(jsonString, ["password", "creditCard"]);

console.log(result);
// Output: '{"username":"user123","password":"****","profile":{"creditCard":"****","address":"123 Main St"}}'
```

### Mask sensitive data in arrays

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  users: [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ]
});

const result = parseSensitiveData(jsonString);

console.log(result);
// Output: '{"users":[{"username":"user1","password":"****"},{"username":"user2","password":"****"}]}'
```

### Mask all default sensitive fields

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret123",
  confirmPassword: "secret123",
  creditCard: "1234-5678-9012-3456",
  email: "user@example.com"
});

const result = parseSensitiveData(jsonString);

console.log(result);
// Output: '{"username":"user123","password":"****","confirmPassword":"****","creditCard":"****","email":"user@example.com"}'
```

### Handle nested JSON strings

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  data: JSON.stringify({
    password: "nested-secret",
    username: "user"
  })
});

const result = parseSensitiveData(jsonString);

console.log(result);
// Output: '{"data":"{\\"password\\":\\"****\\",\\"username\\":\\"user\\"}"}'
```

### Handle invalid JSON gracefully

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const invalidJson = "{ invalid json }";
const result = parseSensitiveData(invalidJson);

console.log(result);
// Output: "{ invalid json }"
```

### Mask deeply nested structures

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  level1: {
    level2: {
      level3: {
        password: "deep-secret",
        username: "user"
      }
    }
  }
});

const result = parseSensitiveData(jsonString);

console.log(result);
// Output: '{"level1":{"level2":{"level3":{"password":"****","username":"user"}}}}'
```

### Use for logging API requests

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const requestBody = JSON.stringify({
  username: "john_doe",
  password: "secret123",
  email: "john@example.com"
});

const safeLog = parseSensitiveData(requestBody);
console.log("Request body:", safeLog);
// Output: Request body: {"username":"john_doe","password":"****","email":"john@example.com"}
```

### Mask multiple sensitive field types

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  user: {
    name: "John",
    password: "pass123",
    ssn: "123-45-6789",
    token: "bearer-token-xyz"
  }
});

const result = parseSensitiveData(jsonString, ["password", "ssn", "token"]);

console.log(result);
// Output: '{"user":{"name":"John","password":"****","ssn":"****","token":"****"}}'
```

### Handle empty sensitive keys array

```typescript
import { parseSensitiveData } from "@arkyn/shared";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret123"
});

const result = parseSensitiveData(jsonString, []);

console.log(result);
// Output: '{"username":"user123","password":"secret123"}'
```
