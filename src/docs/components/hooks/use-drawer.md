# useDrawer

The `useDrawer` hook provides access to drawer state and drawer actions from drawer context, and it can be used in two different modes: global mode (without `key`) and scoped mode (with `key`).

## Import

```ts
import { useDrawer } from "@arkyn/components";
```

## Parameters

### `key` (optional)

Drawer identifier. When provided, the hook returns helpers already scoped to that drawer key.

**Type:** `string`

When omitted, the hook returns global helpers that work with any drawer key.

## Return value

The hook returns different signatures depending on whether `key` is provided.

**Type:** `DrawerContextProps<T> | { drawerIsOpen: boolean; drawerData: T; openDrawer: (data?: T) => void; closeDrawer: () => void }`

### Without `key` (global mode)

Use this mode when you want to control multiple drawers from the same component.

- `drawerIsOpen(key: string): boolean`
  Checks whether a specific drawer is open.
- `drawerData(key: string): T`
  Reads the data associated with a specific drawer key.
- `openDrawer(key: string, data?: T): void`
  Opens the drawer for the provided key and optionally stores data.
- `closeDrawer(key: string): void`
  Closes the drawer for the provided key.

### With `key` (scoped mode)

Use this mode when a component is responsible for only one drawer.

- `drawerIsOpen: boolean`
  Boolean state for the current scoped drawer.
- `drawerData: T`
  Data stored for the current scoped drawer.
- `openDrawer(data?: T): void`
  Opens only the scoped drawer and optionally stores data.
- `closeDrawer(): void`
  Closes only the scoped drawer.

## Usage example

### Global mode (without `key`)

```tsx
import { DrawerProvider, useDrawer } from "@arkyn/components";

function DrawerActions() {
  const { drawerIsOpen, drawerData, openDrawer, closeDrawer } = useDrawer<{
    category: string;
  }>();

  const filtersOpen = drawerIsOpen("filters");
  const filtersData = drawerData("filters");

  return (
    <div>
      <p>Is filters drawer open? {String(filtersOpen)}</p>
      <p>Current category: {filtersData?.category ?? "none"}</p>

      <button
        onClick={() => openDrawer("filters", { category: "electronics" })}
      >
        Open filters
      </button>

      <button onClick={() => closeDrawer("filters")}>Close filters</button>
    </div>
  );
}

function App() {
  return (
    <DrawerProvider>
      <DrawerActions />
    </DrawerProvider>
  );
}
```

### Scoped mode (with `key`)

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
  const { openDrawer } = useDrawer<{ category: string }>("filters");

  return (
    <button onClick={() => openDrawer({ category: "electronics" })}>
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
- Global mode is useful for centralized drawer orchestration (multiple keys in one place).
- Keyed mode is useful to avoid repeating the same key in open/close calls.
- If your component only interacts with one drawer, prefer scoped mode for cleaner code.
- Provider dependency: [drawer-provider.mdx](drawer-provider.mdx).
