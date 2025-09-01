# validatePassword

The `validatePassword` function checks if a password meets the following criteria:

- Minimum of 8 characters
- At least 1 uppercase letter
- At least 1 letter (any case)
- At least 1 number
- At least 1 special character

## Import

```ts
import { validatePassword } from "@arkyn/shared";
```

## Parameters

- **rawPassword** (`string`): The string of the password to be validated.

## Returns

- **(`boolean`)**: Returns `true` if the password is valid, otherwise `false`.

## Usage Example

```ts
import { validatePassword } from "./validatePassword";

validatePassword("Password@123"); // true
validatePassword("password123"); // false (no capitalization and no special characters)
```
