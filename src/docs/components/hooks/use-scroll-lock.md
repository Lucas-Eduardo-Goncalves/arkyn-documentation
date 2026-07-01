# useScrollLock

The `useScrollLock` hook locks body scrolling while preserving layout width compensation for scrollbars.

## Import

```ts
import { useScrollLock } from "@arkyn/components/useScrollLock";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Parameters

### `isLocked` (required)

Indicates whether body scroll should be blocked.

**Type:** `boolean`

## Return value

The hook applies side effects to `document.body` and does not return a value.

**Type:** `void`

## Usage example

```tsx
import { useState } from "react";
import { useScrollLock } from "@arkyn/components/useScrollLock";

function ModalExample() {
    const [isOpen, setIsOpen] = useState(false);

    useScrollLock(isOpen);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            {isOpen && (
                <div>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    <p>Modal content</p>
                </div>
            )}
        </>
    );
}
```

## Notes

- On lock, the hook sets `document.body.style.overflow` to `hidden`.
- It calculates scrollbar width and adds right padding to prevent layout shift.
- Original body styles are restored when lock is disabled or component unmounts.
- In non-browser environments, scrollbar width computation returns `0`.
