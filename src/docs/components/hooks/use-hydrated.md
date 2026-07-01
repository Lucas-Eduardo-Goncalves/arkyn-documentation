# useHydrated

The `useHydrated` hook detects whether rendering is happening after client hydration.

## Import

```ts
import { useHydrated } from "@arkyn/components/useHydrated";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Parameters

This hook does not receive parameters.

## Return value

The hook returns whether hydration has completed on the client.

**Type:** `boolean`

- `isHydrated` (value returned by the hook): `boolean`
  `false` during SSR/pre-hydration and `true` after hydration on the client.

## Usage example

```tsx
import { useHydrated } from "@arkyn/components/useHydrated";

function ClientAwareClock() {
    const isHydrated = useHydrated();

    if (!isHydrated) {
        return <div>Loading...</div>;
    }

    return <div>{new Date().toLocaleString()}</div>;
}
```

## Notes

- Useful to prevent hydration mismatch warnings.
- Commonly used with browser-only APIs like `window`, `document`, and `navigator`.
