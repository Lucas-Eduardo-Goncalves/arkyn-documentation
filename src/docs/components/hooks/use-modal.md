# useModal

The `useModal` hook provides access to modal state and modal actions from modal context.

## Import

```ts
import { useModal } from "@arkyn/components";
```

## Parameters

### `key` (optional)

Modal identifier. When provided, the hook returns modal-specific helpers for this key.

**Type:** `string`

## Return value

The hook returns either the full modal context or key-scoped modal helpers.

**Type:** `ModalContextProps<T> | { modalIsOpen: boolean; modalData: T; openModal: (data?: T) => void; closeModal: () => void }`

| Property      | Type                                                      | Description                                                          |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `modalIsOpen` | `(key: string) => boolean` or `boolean`                   | In full mode, checks a key; in keyed mode, current key open state.   |
| `modalData`   | `(key: string) => T` or `T`                               | In full mode, reads data by key; in keyed mode, data of current key. |
| `openModal`   | `(key: string, data?: T) => void` or `(data?: T) => void` | Opens modal globally or scoped to current key.                       |
| `closeModal`  | `(key: string) => void` or `() => void`                   | Closes modal globally by key or closes current key.                  |
| `closeAll`    | `() => void`                                              | Available only in full context mode to close every open modal.       |

## Usage example

```tsx
import { ModalProvider, useModal } from "@arkyn/components";

function UserModal() {
  const { modalIsOpen, modalData, closeModal } = useModal<{ id: number }>(
    "user",
  );

  if (!modalIsOpen) return null;

  return (
    <section>
      <p>User id: {modalData?.id}</p>
      <button onClick={closeModal}>Close</button>
    </section>
  );
}

function ModalActions() {
  const { openModal, closeAll } = useModal();

  return (
    <div>
      <button onClick={() => openModal("user", { id: 123 })}>
        Open user modal
      </button>
      <button onClick={closeAll}>Close all</button>
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <ModalActions />
      <UserModal />
    </ModalProvider>
  );
}
```

## Notes

- Calling `useModal` outside provider scope throws an error.
- Keyed mode simplifies modal-specific component implementations.
- Provider dependency: [modal-provider.mdx](modal-provider.mdx).
