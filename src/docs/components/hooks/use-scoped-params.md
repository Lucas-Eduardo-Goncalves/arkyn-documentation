# useScopedParams

The `useScopedParams` hook reads and updates URL search parameters with optional key scoping.

## Import

```ts
import { useScopedParams } from "@arkyn/components/useScopedParams";
```

Learn how subpath and root imports differ in [How do I use imports](/docs/guides/how-do-i-use-imports).

## Parameters

### `searchString` (required)

Current URL search string used to initialize `URLSearchParams`.

**Type:** `string`

### `scope` (optional)

Prefix used to namespace keys as `scope:key`.

**Type:** `string`
**Default:** `""`

## Return value

The hook returns helpers to read scoped params and generate updated search strings.

**Type:** `{ getParam: (key: string) => string | null; getScopedSearch: (params: Record<string, string | number | boolean | undefined>) => string }`

- `getParam(key: string): string | null`
  Reads a parameter by key, applying scope prefix when configured.
- `getScopedSearch(params: Record<string, string | number | boolean | undefined>): string`
  Merges updates, removes keys with `undefined`, and returns a query string with optional `?` prefix.

## Usage example

```tsx
import { useScopedParams } from "@arkyn/components/useScopedParams";

function ProductFilters({ search }: { search: string }) {
    const { getParam, getScopedSearch } = useScopedParams(search, "filters");

    const category = getParam("category");

    function applyElectronics() {
        const nextSearch = getScopedSearch({ category: "electronics", page: 1 });
        // navigate({ search: nextSearch })
        console.log(nextSearch);
    }

    return (
        <div>
            <p>Category: {category || "all"}</p>
            <button onClick={applyElectronics}>Electronics</button>
        </div>
    );
}
```

## Notes

- Passing `undefined` deletes the target key from query parameters.
- The hook preserves existing unrelated parameters while applying updates.
- Use a scope to avoid key collisions between independent filter groups.
