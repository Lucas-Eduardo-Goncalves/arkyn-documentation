# useDrawer

The `useDrawer` hook provides access to drawer state and drawer actions from drawer context.

## Import

```ts
import { useDrawer } from "@arkyn/components";
```

## Parameters

### `key` (optional)

Drawer identifier. When provided, the hook returns drawer-specific helpers for this key.

**Type:** `string`

## Return value

The hook returns either the full drawer context or key-scoped drawer helpers.

**Type:** `DrawerContextProps<T> | { drawerIsOpen: boolean; drawerData: T; openDrawer: (data?: T) => void; closeDrawer: () => void }`

| Property       | Type                                                      | Description                                                          |
| -------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `drawerIsOpen` | `(key: string) => boolean` or `boolean`                   | In full mode, checks a key; in keyed mode, current key open state.   |
| `drawerData`   | `(key: string) => T` or `T`                               | In full mode, reads data by key; in keyed mode, data of current key. |
| `openDrawer`   | `(key: string, data?: T) => void` or `(data?: T) => void` | Opens drawer globally or scoped to current key.                      |
| `closeDrawer`  | `(key: string) => void` or `() => void`                   | Closes drawer globally by key or closes current key.                 |

## Usage example

```tsx
import { DrawerProvider, useDrawer } from "@arkyn/components";

function FiltersDrawer() {
  const { drawerIsOpen, drawerData, closeDrawer } = useDrawer<{
    category: string;
  }>("filters");

  if (!drawerIsOpen) return null;

  return (
    <aside>
      <p>Category: {drawerData?.category}</p>
      <button onClick={closeDrawer}>Close</button>
    </aside>
  );
}

function DrawerActions() {
  const { openDrawer } = useDrawer();

  return (
    <button onClick={() => openDrawer("filters", { category: "electronics" })}>
      Open filters
    </button>
  );
}

function App() {
  return (
    <DrawerProvider>
      <DrawerActions />
      <FiltersDrawer />
    </DrawerProvider>
  );
}
```

## Notes

- Calling `useDrawer` outside provider scope throws an error.
- Keyed mode is useful to avoid repeating the same key in open/close calls.
- Provider dependency: [drawer-provider.mdx](drawer-provider.mdx).
