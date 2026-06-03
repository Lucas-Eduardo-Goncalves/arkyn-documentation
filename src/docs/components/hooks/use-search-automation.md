# useSearchAutomation

The `useSearchAutomation` hook automates modal closing and toast notifications from URL search parameters.

## Import

```ts
import { useSearchAutomation } from "@arkyn/components";
```

## Parameters

### `searchString` (required)

Raw URL search parameters string containing automation metadata.

**Type:** `string`

### `scope` (optional)

Scope prefix used to read namespaced keys in the format `scope:key`.

**Type:** `string`
**Default:** `""`

## Return value

The hook performs side effects and does not return a value.

**Type:** `void`

## Usage example

```tsx
import { useSearchAutomation } from "@arkyn/components";

function SearchAutomationHandler({ search }: { search: string }) {
    useSearchAutomation(search, "filters");
    return null;
}

// Example search string:
// "filters:closeModal=true&filters:message=Updated%20successfully&filters:type=success"
```

## Notes

- Reads `closeModal`, `message`, `name`, and `type` through `useScopedParams`.
- Uses `badResponses` and `successResponses` templates to refine toast type decisions.
- Requires context providers used by internal hooks: [modal-provider](modal-provider ) and [toast-provider](toast-provider).
- Related hooks: `useScopedParams`, `useModal`, and `useToast`.
