# useAutomation

The `useAutomation` hook automates modal closing and toast notifications based on form response data.

## Import

```ts
import { useAutomation } from "@arkyn/components";
```


For the hook to work, you need to install the following dependencies:

```bash
npm install react-scroll
```

## Parameters

### `formResponseData` (required)

Object containing automation metadata from a form response.

**Type:** `any`

## Return value

The hook performs side effects and does not return a value.

**Type:** `void`

## Usage example

```tsx
import { useAutomation } from "@arkyn/components";

function SubmitFeedback({ responseData }: { responseData: any }) {
    useAutomation(responseData);

    return null;
}

// Example response data
const responseData = {
    closeModal: true,
    message: "Operation completed successfully!",
    type: "success",
};
```

## Notes

- If `closeModal` is truthy, the hook calls `closeAll()` from `useModal()`.
- If `message` is present, it decides toast style using `type`, `badResponses`, and `successResponses`.
- Requires context providers used by internal hooks: [modal-provider](modal-provider) and [toast-provider](toast-provider).
- Related hooks: `useModal` and `useToast`.
