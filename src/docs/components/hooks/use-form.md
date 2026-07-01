# useForm

The `useForm` hook exposes form context data such as field-level validation errors.

## Import

```ts
import { useForm } from "@arkyn/components/useForm";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Parameters

This hook does not receive parameters.

## Return value

The hook returns the current form context object.

**Type:** `{ fieldErrors: { [x: string]: any } }`

- `fieldErrors: { [x: string]: any }`
  Validation errors indexed by field name.

## Usage example

```tsx
import { FormProvider } from "@arkyn/components/formProvider";
import { useForm } from "@arkyn/components/useForm";

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
- Provider dependency: [form-provider](form-provider).
