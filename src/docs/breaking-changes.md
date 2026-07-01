# Breaking Changes

This document gathers only the Arkyn versions that require some code change from the library's consumers. Versions with no direct impact on your code do not appear here — see [changelog](/docs/changelog) for the full history.

---

## v3.0.1-beta.174

### What changed

The `schema` prop, used by every Alert component (`AlertContainer`, `AlertContent`, `AlertDescription`, `AlertIcon`, and `AlertTitle`), was renamed to `scheme`. This change unifies the naming already adopted by `Button`, `Badge`, and `IconButton` across the library.

### How to migrate

Rename `schema` to `scheme` in every use of Alert.

Before

```tsx
<AlertContainer scheme="danger">...</AlertContainer>
```

After

```tsx
<AlertContainer scheme="danger">...</AlertContainer>
```

### Impact

Affects any project that uses Alert with the `schema` prop. The old name is no longer recognized and is silently ignored — Alert still renders, but without applying the expected color scheme.

### Notes

The `scheme` pattern was already used by the library's other components; this change simply aligns Alert with the existing convention.

---

## v3.0.1-beta.170

### What changed

UI dependencies used internally by `@arkyn/components` — `framer-motion`, `mapbox-gl`, `slate`, `slate-history`, `slate-react`, `@react-google-maps/api`, `react-hot-toast`, `react-scroll`, `html-react-parser`, and `@react-input/mask` — are no longer installed automatically and are now `peerDependencies`. In addition, the minimum required version of `react` and `react-dom` was corrected.

### How to migrate

Explicitly install, in your project, the dependencies related to the components you use:

```bash
bun add framer-motion mapbox-gl slate slate-history slate-react \
  @react-google-maps/api react-hot-toast react-scroll html-react-parser \
  @react-input/mask
```

You don't need to install all of them — only the ones used by the components present in your project (for example, `framer-motion` for `Drawer`/`Modal`, `mapbox-gl` for `MapView`, `slate*` for `RichText`).

### Impact

Affects any project that relied on the transitive installation of these libraries. Without installing them manually, the components that depend on them stop working correctly.

### Notes

The minimum `react`/`react-dom` requirement was corrected from `>=19.2.6` to `>=18.0.0`, restoring compatibility with React 18 projects that had been incorrectly blocked.

---

## v3.0.1-beta.148

### What changed

The `defaultValue` prop on `FullCalendar`, used to set the initially focused date, was renamed to `defaultViewValue`.

### How to migrate

Before

```tsx
<FullCalendar defaultValue={new Date(2026, 5, 1)} />
```

After

```tsx
<FullCalendar defaultViewValue={new Date(2026, 5, 1)} />
```

### Impact

Affects only those who already used `FullCalendar` with the `defaultValue` prop to control the initially displayed date. The old prop is silently ignored in this version — without the rename, the calendar always opens on the current date.

### Notes

This change standardizes the naming between `FullCalendar` and `Calendar`: `value` controls the selection, `viewValue` controls the displayed period, and `defaultViewValue` sets the initial period.

---

## v3.0.1-beta.147

### What changed

Three changes to FullCalendar's API:

1. The `date` property on event objects (`FullCalendarEvent`) was renamed to `initialDate`.
2. The `defaultView` prop, which set the initial view (`"day"` | `"week"` | `"month"`), was removed — the component now always initializes in month view.
3. The `onChange` prop was removed.

### How to migrate

Rename `date` to `initialDate` on every event:

Before

```tsx
events={[{ title: "Meeting", date: new Date(2026, 5, 23, 10, 0) }]}
```

After

```tsx
events={[{ title: "Meeting", initialDate: new Date(2026, 5, 23, 10, 0) }]}
```

If you used `defaultView="day"` or `defaultView="week"`, remove the prop — there is no direct replacement; the calendar always opens in month view.

If you used `onChange` to react to date changes, replace it with `onClickDate` (user click on a cell) or `onChangeView` (navigation between periods), depending on the intended behavior:

Before

```tsx
<FullCalendar onChange={(date) => setSelectedDate(date)} />
```

After

```tsx
<FullCalendar onClickDate={(date) => setSelectedDate(date)} />
```

### Impact

Affects only those who already integrated `FullCalendar` since its introduction in the previous version (v3.0.1-beta.146). Anyone who hadn't yet used the component is not impacted.

### Notes

These changes accompany the introduction of `blockedTimestamps` and `onClickDate`, which expand control over calendar interactions. The same version also made `"vertical"` the default orientation for `ImageUpload`, `MultiSelect`, `RadioGroup`, `RichText`, and `Select` — that part does not require a code change and is therefore not listed as a breaking change here; see [changelog](/docs/changelog) for details.
