# useModal

The `useModal` hook provides access to modal state and modal actions from modal context, and it can be used in two different modes: global mode (without `key`) and scoped mode (with `key`).

## Import

```ts
import { useModal } from "@arkyn/components";
```

## Parameters

### `key` (optional)

Modal identifier. When provided, the hook returns helpers already scoped to that modal key.

**Type:** `string`

When omitted, the hook returns global helpers that work with any modal key.

## Return value

The hook returns different signatures depending on whether `key` is provided.

**Type:** `ModalContextProps<T> | { modalIsOpen: boolean; modalData: T; openModal: (data?: T) => void; closeModal: () => void }`

### Without `key` (global mode)

Use this mode when you want to control multiple modals from the same component.

- `modalIsOpen(key: string): boolean`
  Checks whether a specific modal is open.
- `modalData(key: string): T`
  Reads the data associated with a specific modal key.
- `openModal(key: string, data?: T): void`
  Opens the modal for the provided key and optionally stores data.
- `closeModal(key: string): void`
  Closes the modal for the provided key.
- `closeAll(): void`
  Closes every currently open modal.

### With `key` (scoped mode)

Use this mode when a component is responsible for only one modal.

- `modalIsOpen: boolean`
  Boolean state for the current scoped modal.
- `modalData: T`
  Data stored for the current scoped modal.
- `openModal(data?: T): void`
  Opens only the scoped modal and optionally stores data.
- `closeModal(): void`
  Closes only the scoped modal.

In scoped mode, `closeAll` is not returned because the hook is bound to a single key.

## Usage example

### Global mode (without `key`)

```tsx
import { ModalProvider, useModal } from "@arkyn/components";

function ModalActions() {
  const { modalIsOpen, modalData, openModal, closeModal, closeAll } = useModal<{
    id: number;
  }>();

  const userModalOpen = modalIsOpen("user");
  const userData = modalData("user");

  return (
    <div>
      <p>Is user modal open? {String(userModalOpen)}</p>
      <p>Current user id: {userData?.id ?? "none"}</p>

      <button onClick={() => openModal("user", { id: 123 })}>
        Open user modal
      </button>

      <button onClick={() => closeModal("user")}>Close user modal</button>
      <button onClick={closeAll}>Close all modals</button>
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <ModalActions />
    </ModalProvider>
  );
}
```

### Scoped mode (with `key`)

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
  const { openModal } = useModal<{ id: number }>("user");

  return (
    <div>
      <button onClick={() => openModal({ id: 123 })}>Open user modal</button>
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
- Global mode is useful for centralized modal orchestration (multiple keys in one place).
- Keyed mode simplifies modal-specific component implementations and avoids repeating the modal key.
- If your component only interacts with one modal, prefer scoped mode for cleaner code.
- Provider dependency: [modal-provider.mdx](modal-provider.mdx).
