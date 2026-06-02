# useForm

The `useForm` hook exposes form context data such as field-level validation errors.

## Import

```ts
import { useForm } from "@arkyn/components";
```

## Parameters

This hook does not receive parameters.

## Return value

The hook returns the current form context object.

**Type:** `{ fieldErrors: { [x: string]: any } }`

- `fieldErrors: { [x: string]: any }`
  Validation errors indexed by field name.

## Usage example

```tsx
import { FormProvider, useForm } from "@arkyn/components";

function EmailField() {
  const { fieldErrors } = useForm();

  return (
    <div>
      <input name="email" />
      {fieldErrors?.email && <span>{fieldErrors.email}</span>}
    </div>
  );
}

function App() {
  return (
    <FormProvider fieldErrors={{ email: "Invalid email format" }}>
      <EmailField />
    </FormProvider>
  );
}
```

## Notes

- `fieldErrors` can be undefined or empty depending on provider input.
- Provider dependency: [form-provider.mdx](form-provider.mdx).
