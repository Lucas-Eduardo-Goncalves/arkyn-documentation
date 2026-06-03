# useToast

The `useToast` hook exposes toast notification actions from toast context.

## Import

```ts
import { useToast } from "@arkyn/components";
```

## Parameters

This hook does not receive parameters.

## Return value

The hook returns toast context methods.

**Type:** `{ showToast: (toast: { message: string; type: "success" | "danger" }) => void }`

- `showToast(toast: { message: string; type: "success" | "danger" }): void`
  Displays a toast notification using the configured provider style.

## Usage example

```tsx
import { ToastProvider, useToast } from "@arkyn/components";

function SaveButton() {
    const { showToast } = useToast();

    async function handleSave() {
        try {
            // await saveData();
            showToast({ message: "Saved successfully", type: "success" });
        } catch {
            showToast({ message: "Failed to save", type: "danger" });
        }
    }

    return <button onClick={handleSave}>Save</button>;
}

function App() {
    return (
        <ToastProvider>
            <SaveButton />
        </ToastProvider>
    );
}
```

## Notes

- Calling `useToast` outside provider scope throws an error.
- Provider dependency: [toast-provider](toast-provider).
