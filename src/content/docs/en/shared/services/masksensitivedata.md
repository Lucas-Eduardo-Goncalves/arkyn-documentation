---
title: maskSensitiveData
description: Masks sensitive data in a JSON string, replacing the values ​​of specified keys with '****'.
---

The `maskSensitiveData` function processes a JSON string and masks the values ​​associated with sensitive keys, replacing them with `****`.

## Import

```ts
import { maskSensitiveData } from "@arkyn/shared";
```

## Parameters

The function accepts the following parameters:

**`jsonString`**

- **Type**: `string`
- **Description**: The JSON string to be processed.
- **Required**: Yes
- **Default**: N/A

**`sensitiveKeys`** (optional)

- **Type**: `string[]`
- **Description**: An array of keys whose values ​​should be masked. - **Default**: `["password", "confirmPassword", "creditCard"]`

## Return

The function returns a JSON string with the masked sensitive data. If the input string is not valid JSON, the function returns the original string.

## Usage Example

```javascript
import { maskSensitiveData } from "./maskSensitiveData";

const jsonString = JSON.stringify({
  username: "user123",
  password: "secret",
  profile: {
    creditCard: "1234-5678-9012-3456",
  },
});

const result = maskSensitiveData(jsonString, ["password", "creditCard"]);

console.log(result);
// Output: '{"username":"user123","password":"****","profile":{"creditCard":"****"}}'
```
