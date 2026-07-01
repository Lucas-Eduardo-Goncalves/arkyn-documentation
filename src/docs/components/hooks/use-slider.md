# useSlider

The `useSlider` hook manages slider state with automatic clamping between `0` and `100`.

## Import

```ts
import { useSlider } from "@arkyn/components/useSlider";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Parameters

### `defaultValue` (optional)

Initial slider value, clamped to the `0-100` range.

**Type:** `number`
**Default:** `0`

## Return value

The hook returns the current slider value and a setter with boundary validation.

**Type:** `[number, (value: number) => void]`

- `0: number`
  Current slider value in range `0-100`.
- `1: (value: number) => void`
  Updates slider value and clamps out-of-range input.

## Usage example

```tsx
import { useSlider } from "@arkyn/components/useSlider";

function SliderField() {
    const [value, setValue] = useSlider(25);

    return (
        <div>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(event) => setValue(Number(event.target.value))}
            />
            <p>Value: {value}</p>
        </div>
    );
}
```

## Notes

- Values lower than `0` are converted to `0`.
- Values higher than `100` are converted to `100`.
- Useful for controlled slider UI components that must stay in a fixed range.
