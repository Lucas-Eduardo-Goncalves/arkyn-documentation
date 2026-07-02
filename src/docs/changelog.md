# Changelog

This document gathers the release history of Arkyn, from the most recent version to the oldest. Each entry is written from the perspective of the library's consumers: what actually changed in practice, not just which files were touched.

Versions marked with Breaking Changes have a dedicated section with a step-by-step migration guide in [breaking-changes](/docs/breaking-changes).

---

## v3.0.1-beta.199

Date: 2026-07-02

Status: Test coverage for `@arkyn/components` expanded with 65 new specs covering all remaining components and providers. `Popover` migrated away from `framer-motion` to CSS visibility. Bug fixes in `TableBody`, `Textarea`, and `AudioPlayer` discovered while writing the tests.

### Changes By Package

- `@arkyn/components`

  **Component fixes**

  - **`Popover`: removed `framer-motion`** — `motion.div` replaced with a plain `div` using `style={{ visibility: isOpen ? "visible" : "hidden" }}`. The opacity animation framer-motion controlled (`0 → 1`) was dropped. Open/close behavior and `closeOnClick` remain intact, now with no framer-motion runtime dependency. Corresponding adjustment in `popover/styles.css`.

  - **`TableBody`: empty-state detection fixed** — `Children.count(children) === 0` replaced with `Children.toArray(children).filter(Boolean).length === 0`. `Children.count` does not filter `null`/`undefined` children, which caused the empty-state row to render even when conditional children resolved to `null`. The new approach uses `Children.toArray` with `.filter(Boolean)` to count only real children.

  - **`Textarea`: controlled/uncontrolled conflict resolved** — the component was passing both `value` and `defaultValue` to the underlying `<textarea>` simultaneously under certain conditions, triggering a React warning. Introduced `domValue`: when `disabled`, `domValue = undefined` (the disabled state uses `placeholder` to show the value instead); otherwise `domValue = value`. `defaultValue` is now only passed when `domValue === undefined`, ensuring the element is never in an ambiguous controlled/uncontrolled state.

  - **`AudioPlayer`: empty `src` attribute prevented** — `src={props.src}` changed to `src={props.src || undefined}`. Prevents the `<audio>` element from receiving `src=""` (an empty string), which triggers an invalid HTTP request to the base URL.

  **Testing infrastructure**

  - **`vitest.setup.ts` created** with two responsibilities:
    - Imports `@testing-library/jest-dom/vitest` to enable matchers such as `toBeInTheDocument`, `toHaveClass`, `toBeDisabled`, and others across all specs.
    - Polyfills `HTMLElement.isContentEditable` — jsdom does not implement this property, which Slate/slate-react uses internally to identify the `contenteditable` element of the editor. Without it, focus, blur, `beforeinput`, and typing events inside `RichText` silently never fire in the test environment. The polyfill walks the ancestor tree looking for the `contenteditable` attribute and returns `true` or `false` accordingly.

  - **`vitest.config.ts`**: added `setupFiles: ["./vitest.setup.ts"]` so the setup file runs before every spec.

  - **New devDependencies:**
    - `@testing-library/jest-dom@^6.9.1` — custom DOM assertion matchers
    - `@testing-library/user-event@^14.6.1` — realistic user interaction simulation (typing, clicking, focusing)

  **New component specs** (`src/components/__test__/`) — 53 files:

  - `alertContainer.spec.tsx` — rendering, schemes, children, HTML attribute passthrough
  - `alertContent.spec.tsx` — internal composition and prop propagation
  - `alertDescription.spec.tsx` — text content, truncation, and attributes
  - `alertIcon.spec.tsx` — icons per scheme, size, accessibility
  - `alertTitle.spec.tsx` — typography and HTML attributes
  - `audioPlayer.spec.tsx` — play/pause, progress, volume, invalid src
  - `audioUpload.spec.tsx` — upload, drag-and-drop, disabled/loading/error states
  - `badge.spec.tsx` — variants, schemes, sizes, icons
  - `button.spec.tsx` — variants, schemes, isLoading, disabled, icons
  - `calendar.spec.tsx` — single/range modes, navigation, date selection, disabled dates
  - `cardTabButton.spec.tsx` — active state, callbacks, accessibility
  - `cardTabContainer.spec.tsx` — composition, activeTab, onChange
  - `checkbox.spec.tsx` — checked, defaultChecked, disabled, error, orientations
  - `clientOnly.spec.tsx` — SSR/client hydration, children rendering
  - `currencyInput.spec.tsx` — locales, formatting, prefix/suffix, all states
  - `divider.spec.tsx` — orientations, variants, attributes
  - `drawerContainer.spec.tsx` — animations, orientations, scroll lock, makeInvisible
  - `drawerHeader.spec.tsx` — showCloseButton, title, close callback
  - `facebookPixel.spec.tsx` — initialization, track/trackCustom events, consent
  - `fieldError.spec.tsx` — error message, visibility, accessibility
  - `fieldLabel.spec.tsx` — showAsterisk, htmlFor, children
  - `fieldWrapper.spec.tsx` — label + error + children composition
  - `fileUpload.spec.tsx` — upload, accepted types, drag, error, disabled
  - `fullCalendar.spec.tsx` — day/week/month views, events, navigation, blocked timestamps
  - `googleAnalytics.spec.tsx` — script injection, showInDevMode, NODE_ENV guard
  - `googleTagManager.spec.tsx` — GTM script injection, dataLayer, showInDevMode
  - `iconButton.spec.tsx` — variants, schemes, sizes, disabled, aria-label
  - `imageUpload.spec.tsx` — upload, preview, removal, accepted types, disabled
  - `input.spec.tsx` — variants, prefix/suffix/icons, all states, password type
  - `mapView.spec.tsx` — map initialization, markers, popups, accessToken
  - `maskedInput.spec.tsx` — masks, variants, all states, formatting
  - `modalContainer.spec.tsx` — animations, scroll lock, makeInvisible, children
  - `modalFooter.spec.tsx` — layout, HTML attributes, children
  - `modalHeader.spec.tsx` — showCloseButton, title, close callback
  - `multiSelect.spec.tsx` — multiple selection, search, disabled, readOnly, error
  - `pagination.spec.tsx` — navigation, stable keys, currentPage, totalPages
  - `phoneInput.spec.tsx` — country selector, masks, disabled, readOnly, error
  - `popover.spec.tsx` — orientations, closeOnClick, overlay, visibility toggling
  - `radioBox.spec.tsx` — checked, error, disabled, callbacks
  - `radioGroup.spec.tsx` — selection, options, defaultValue, disabled, error
  - `richText.spec.tsx` — toolbar, mark/block toggles, serialization/deserialization
  - `select.spec.tsx` — isSearchable, variants, all states, disabled, readOnly
  - `slider.spec.tsx` — drag, click, min/max boundaries, disabled, onChange
  - `switch.spec.tsx` — toggle, defaultChecked, disabled, error, sizes
  - `tabButton.spec.tsx` — active state, callbacks, disabled, accessibility
  - `tabContainer.spec.tsx` — composition, activeTab, onChange, children
  - `tableBody.spec.tsx` — empty state, conditional children, attribute passthrough
  - `tableCaption.spec.tsx` — text content, positioning, attributes
  - `tableContainer.spec.tsx` — horizontal scroll, attributes, children
  - `tableFooter.spec.tsx` — rendering, attributes, passthrough
  - `tableHeader.spec.tsx` — columns, sorting, attributes, children
  - `textarea.spec.tsx` — variants, controlled/uncontrolled, disabled, error, resize
  - `tooltip.spec.tsx` — orientations, viewport-aware flipping, hover, content

  **New provider specs** (`src/providers/__test__/`) — 5 files:

  - `drawerProvider.spec.tsx` — open/close state, data passing, multiple independent keys
  - `formProvider.spec.tsx` — submission state, field values, context integration
  - `modalProvider.spec.tsx` — open/close state, data passing, multiple independent keys
  - `placesProvider.spec.tsx` — Google Maps API mock, initialization, context
  - `toastProvider.spec.tsx` — toast dispatch, types, duration, children rendering

  **Corrections to existing specs** — 44 files updated for consistency in test descriptions, mock patterns, and assertions after introducing `vitest.setup.ts` and `@testing-library/user-event`.

- `@arkyn/components` (styles)
  - **`Button/styles.css`**: background of the `outline` variant changed from `var(--background-foreground)` to `var(--background-underground)`, improving visual contrast between the outlined button and the page background.
  - **`IconButton/styles.css`**: same fix applied to the `outline` variant of `IconButton`.

- `@arkyn/development`
  - **`_app.css`**: `exampleContainer.foreground` updated to `var(--background-underground)`. Dark mode CSS variables adjusted — `--background`, `--background-underground`, and `--text-heading` — for better contrast in the development playground pages.

### Notes

- With this release, `@arkyn/components` reaches approximately **92 spec files** covering hooks, services, utilities, providers, and all public components in the library.
- The removal of `framer-motion` from `Popover` completes the migration started in beta.184 (`DrawerContainer`) and beta.187 (`ModalContainer`). `framer-motion` remains a `peerDependency` and can still be used directly in consumer projects.
- The `HTMLElement.isContentEditable` polyfill in `vitest.setup.ts` applies only to the jsdom test environment and has no effect in production.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.198

Date: 2026-07-01

Comprehensive test suite added to `@arkyn/components`, covering hooks, rich text services, utilities, and templates.

### New

- Adds a dedicated Vitest configuration (`vitest.config.ts`) for `@arkyn/components`: the `@vitejs/plugin-react` plugin with `jsxRuntime: "automatic"`, `resolve.mainFields: ["module"]` for correct ESM export resolution, a `jsdom` environment to simulate the DOM, and configured timeouts (`testTimeout`, `hookTimeout`, `teardownTimeout`).
- Introduces 27 spec files across four domains in `@arkyn/components`:
  - **Hooks** (`src/hooks/__test__/`): `useAutomation`, `useDrawer`, `useForm`, `useHydrated`, `useModal`, `useScopedParams`, `useScrollLock`, `useSearchAutomation`, `useSlider`, and `useToast`.
  - **Rich Text services** (`src/services/__test__/`): `extractTextFromNode`, `isBlockActive`, `isMarkActive`, `maskCurrencyValues`, `toHtml`, `toRichTextValue`, `toggleBlock`, and `toggleMark`.
  - **Templates** (`src/templates/__test__/`): `badResponses`, `richTextTemplates`, and `successResponses`.
  - **Utilities** (`src/utils/__test__/`): `phoneInputUtilities` and `richTextUtilities`.

### Internal changes

- Adds `@testing-library/react`, `jsdom`, `vitest` (via the workspace `catalog:`), and `@types/is-hotkey` as devDependencies of `@arkyn/components`.
- Updates `actions/setup-node` from `v4` to `v5` in the beta CI workflow.

### Notes

- This version introduces no changes to the components' public API. All added files are for testing (`*.spec.ts/tsx`) and configuration (`vitest.config.ts`).
- Rich text tests cover internal services (`isBlockActive`, `toggleBlock`, `toHtml`, etc.) that previously lacked automated coverage, reducing the risk of regression during future editor changes.
- `@types/is-hotkey` has been added to `devDependencies` and will not be included in published packages (see the CI check added in beta.170).
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).

---

## v3.0.1-beta.196

Date: 2026-06-30

Adds support for custom keyboard shortcuts in RichText and fixes minor color inconsistencies in form components.

### New

- Adds support for customizable keyboard shortcuts in the RichText editor.

### Improvements

- Simplifies RichText's internal state management, reducing unnecessary re-renders.
- Standardizes the color tokens used by RichText, aligning them with the rest of the Design System.

### Fixes

- Fixes the color of the required-field indicator (asterisk) in `FieldError` and `FieldLabel`, ensuring visual consistency with the rest of the system.

### Internal changes

- Reorganizes Textarea's CSS without changing its appearance.

---

## v3.0.1-beta.195

Date: 2026-06-30

Standardizes the background tokens used by Tab and Table, fixing visual inconsistencies between themes.

### Improvements

- Standardizes the color token for Tab's active state.
- Updates the background tokens for Table's header and body, fixing contrast in customized themes. Anyone overriding the previous background variable to customize the table should review that customization.

---

## v3.0.1-beta.194

Date: 2026-06-30

Visual adjustments to Slider and color standardization in Switch.

### Improvements

- Refines the dimensions of the Slider's thumb and track for more consistency across sizes.
- Standardizes the colors of Switch's checked, unchecked, and disabled states.

---

## v3.0.1-beta.193

Date: 2026-06-30

Fixes visual inconsistencies in RadioBox.

### Fixes

- Fixes RadioBox's background and border colors in the checked and error states, standardizing them with the correct Design System tokens.

---

## v3.0.1-beta.192

Date: 2026-06-30

PhoneInput now supports read-only mode.

### New

- Adds support for the `readOnly` prop on PhoneInput, allowing it to be used in read-only fields.

---

## v3.0.1-beta.191

Date: 2026-06-30

Button and IconButton gain a new color scheme; PhoneInput becomes more efficient and receives global contrast adjustments.

### New

- Adds the `"secondary"` scheme to Button and IconButton, available across all variants.

### Improvements

- Reduces unnecessary re-renders in PhoneInput by stabilizing the value-change handler.
- Adjusts the tooltip's color tokens and the input background for better contrast.

---

## v3.0.1-beta.189

Date: 2026-06-30

Fixes the current-page button colors in Pagination.

### Fixes

- Fixes the active page button colors in Pagination, ensuring proper contrast in both light and dark themes.

---

## v3.0.1-beta.188

Date: 2026-06-30

Standardizes MultiSelect's colors.

### Improvements

- Standardizes MultiSelect's color tokens — container, selection indicator, and options list — aligning them with the rest of the system.

---

## v3.0.1-beta.187

Date: 2026-06-30

ModalContainer now uses native CSS animations instead of framer-motion, following the same path already adopted by DrawerContainer.

### Improvements

- Replaces framer-motion with native CSS animations in ModalContainer, removing this component's runtime dependency.
- Fixes ModalContainer's background token to the correct Design System value.

### Fixes

- Adds a missing style rule for DrawerHeader's close button default state.

### Internal changes

- Minor style adjustment in ImageUpload.

---

## v3.0.1-beta.186

Date: 2026-06-30

Standardizes the background tokens across all of FullCalendar's sub-components.

### Improvements

- Standardizes the background tokens used by FullCalendar — header, containers, and events across the day, week, and month views — including the blocked-time state.

---

## v3.0.1-beta.185

Date: 2026-06-30

Fixes FileUpload's background, which was showing an unexpected color in the drop area.

### Fixes

- Fixes FileUpload's drop-area background to use the correct neutral token for input fields, instead of a spotlight color that produced an unintended colored background.

### Internal changes

- Removes an unused import in FileUpload.
- Reformats development-package files, with no functional changes.

---

## v3.0.1-beta.184

Date: 2026-06-30

DrawerContainer migrates to native CSS animations, removing this component's framer-motion dependency.

### Improvements

- Replaces framer-motion with native CSS animations in DrawerContainer, fixing a known race condition in the exit animation.
- Fixes DrawerContainer's background token.
- Adjusts DrawerHeader's close-button transition to only apply on hover, avoiding an unnecessary transition on mount.

---

## v3.0.1-beta.183

Date: 2026-06-30

Substantially expands the internal development package with demo routes for nearly every component in the library, plus minor visual fixes.

### Fixes

- Spacing and border adjustments in AudioPlayer, AudioUpload, Button, and Calendar.
- Fixes an invalid HTML structure that calendar table cells could produce in certain cases.

### Internal changes

- Adds 20+ new demo routes to the development package, covering media, forms, calendars, table, and tabs.
- Improves navigation and organization of the development app.

---

## v3.0.1-beta.182

Date: 2026-06-30

Fixes visual inconsistencies in Select and border adjustments in CurrencyInput and MaskedInput.

### Fixes

- Fixes visual inconsistencies across Select's outline, solid, and underline variants — background, border, hover/focus states, shadow, and the options container's rounded corners.
- Fixes the missing top border on the underline variant of CurrencyInput and MaskedInput.

### Internal changes

- Adds a Select demo route with searchable variants to the development package.

---

## v3.0.1-beta.181

Date: 2026-06-30

Standardizes MaskedInput's colors.

### Improvements

- Standardizes MaskedInput's border, text, and background colors across all states.

### Internal changes

- Adds a MaskedInput demo route.

---

## v3.0.1-beta.180

Date: 2026-06-30

Standardizes CurrencyInput's colors.

### Improvements

- Standardizes CurrencyInput's border, text, and background colors across all states.

### Internal changes

- Adds a CurrencyInput demo route.

---

## v3.0.1-beta.179

Date: 2026-06-30

Expands Input's demo examples.

### Internal changes

- Adds examples of `prefix`, `suffix`, `leftIcon`, and `rightIcon` to Input's demo route.

---

## v3.0.1-beta.178

Date: 2026-06-30

Fixes color tokens in Checkbox and Input.

### Fixes

- Fixes Checkbox's color and background tokens in the default, checked, error, and disabled states.
- Reviews Input's background and border tokens to ensure proper contrast in both light and dark themes, with a specific adjustment to the underline variant's focus state.

### Internal changes

- Adds demo routes for Checkbox and Input.

---

## v3.0.1-beta.177

Date: 2026-06-30

Standardizes IconButton's colors.

### Improvements

- Standardizes IconButton's colors across all states and variants.

### Internal changes

- Adds an IconButton demo route.

---

## v3.0.1-beta.176

Date: 2026-06-30

Updates CardTab's background tokens.

### Improvements

- Updates the background tokens for CardTab's button and container, replacing fixed values with system variables.

### Internal changes

- Adds a CardTab demo route.

---

## v3.0.1-beta.175

Date: 2026-06-30

Refines Button's visuals for more consistent feedback across states.

### Improvements

- Revises Button's alignment, spacing, and hover states, fixing specific issues in the invisible variant and the disabled state.

### Internal changes

- Adds a Button demo route.
- Renames the Badge demo route to correctly reflect its content.

---

## v3.0.1-beta.174

Date: 2026-06-30

Standardizes Alert's prop naming and expands Badge's CSS.

### Improvements

- Expands and refines Badge's CSS, covering every variant-and-scheme combination more precisely.

### Internal changes

- Removes obsolete tests and snapshots for Badge and Button — they will be rewritten.

### Breaking Changes

⚠️ This version contains Breaking Changes.

See: [breaking-changes](/docs/breaking-changes)

---

## v3.0.1-beta.173

Date: 2026-06-30

Introduces the internal `@arkyn/development` package, a playground for viewing components in a real environment, and refines Alert's colors.

### New

- Introduces the `@arkyn/development` package as a development and preview environment for the library's components. It is not published to NPM and does not affect consumers.

### Improvements

- Refines Alert's background, border, and icon colors to use foreground tokens, improving its appearance in customized themes.

---

## Pending version (post-beta.196)

Date: 2026-06-30

Record of a color fix in `FieldError` and `FieldLabel` that, at the time this changelog was originally written, had not yet received a version number. This change is already included in v3.0.1-beta.196 and is kept here only for historical completeness.

### Fixes

- Fixes the required-field asterisk color in `FieldError` and `FieldLabel` (already reflected in v3.0.1-beta.196).

---

## v3.0.1-beta.172

Date: 2026-06-29

Development environment configuration adjustments (VSCode and Biome) and style fixes in Badge, Button, Popover, and Table.

### Fixes

- Adds missing styles for Table's empty state, fixing the alignment of the text shown when there are no records.

### Internal changes

- Reorders the CSS rules in Badge, Button, Popover, and Table, with no visual impact.
- Adds VSCode workspace configuration and Biome rule adjustments for the development team.

---

## v3.0.1-beta.171

Date: 2026-06-29

Type-safety sweep across the monorepo, with minor behavior fixes in Pagination and Slider.

### Fixes

- Fixes a React key warning in Pagination, avoiding reconciliation issues when navigating between pages.
- Stabilizes Slider's drag handlers, avoiding stale-state bugs during dragging.
- Fixes FacebookPixel's return value and GoogleAnalytics's return type to correctly reflect their behavior outside production.

### Internal changes

- Replaces implicit `any` annotations with explicit, intentional typings across several components, services, and utilities in the `components`, `server`, and `shared` packages.

---

## v3.0.1-beta.170

Date: 2026-06-28

Modernizes the monorepo's infrastructure: CI/CD pipeline, package exports, dependency management, and automated versioning.

### Improvements

- Enables more granular tree-shaking through per-module exports in every package.

### Internal changes

- Implements an automated publishing pipeline — build, tests, security audit, and publish — via GitHub Actions.
- Adds automatic version generation and release scripts (beta, patch, minor, major).
- Introduces Biome as the lint and formatting tool across the monorepo, along with Dependabot for dependency updates.

### Breaking Changes

⚠️ This version contains Breaking Changes.

See: [breaking-changes](/docs/breaking-changes)

---

## v3.0.1-beta.148

Date: 2026-06-23

Adds controlled-value support to FullCalendar and Calendar, unifying the prop naming between the two components.

### New

- Adds support for a controlled value (`value`) and controlled navigation (`viewValue` / `defaultViewValue`) in FullCalendar and Calendar.

### Improvements

- Standardizes the border-radius of FullCalendar's view containers.

### Breaking Changes

⚠️ This version contains Breaking Changes.

See: [breaking-changes](/docs/breaking-changes)

---

## v3.0.1-beta.147

Date: 2026-06-23

Refines FullCalendar's API with support for blocked time slots and date-cell clicks, and completes the orientation standardization across form components.

### New

- Adds support for blocked time slots and ranges in FullCalendar via the `blockedTimestamps` prop.
- Adds the `onClickDate` prop, allowing you to react to clicks on an available date cell in any calendar view.

### Fixes

- Fixes click propagation on FullCalendar events, preventing a click on an event from also triggering the underlying cell's selection.

### Improvements

- Standardizes the default orientation to vertical in ImageUpload, MultiSelect, RadioGroup, RichText, and Select, completing the alignment started with PhoneInput. Anyone relying on the horizontal layout must pass `orientation="horizontal"` explicitly.

### Breaking Changes

⚠️ This version contains Breaking Changes.

See: [breaking-changes](/docs/breaking-changes)

---

## v3.0.1-beta.146

Date: 2026-06-13

Introduces the FullCalendar component, with day, week, and month views.

### New

- Introduces the FullCalendar component, with three views (day, week, and month), scheme-colored events, and navigation between periods.

---

## v3.0.1-beta.145

Date: 2026-06-13

Fixes PhoneInput's default orientation.

### Fixes

- Fixes PhoneInput's default orientation from horizontal to vertical, aligning it with the layout convention used by the other form components. Anyone relying on the horizontal layout must pass `orientation="horizontal"` explicitly.

---

## v3.0.1-beta.144

Date: 2026-06-13

Full JSDoc coverage across all packages and design-token refinements.

### Improvements

- Refines the Design System's color tokens: a new gray scale for backgrounds and text, and `-light` variants for every color scheme.

### Internal changes

- Adds full JSDoc documentation to every component, hook, provider, and service in the library.

---

## v3.0.1-beta.143

Date: 2026-06-11

Fixes visual details in Button and IconButton, and redesigns CardTab.

### Fixes

- Fixes the outline variant's background color in Button and IconButton for correct surface contrast.

### Improvements

- Redesigns CardTab with a "pill" container look and new hover/active states with a white background and visible border.

---

## v3.0.1-beta.142

Date: 2026-06-10

A targeted fix to the publishing of the previous version (beta.141), with no code changes.

---

## v3.0.1-beta.141

Date: 2026-06-10

Standardizes the rendering of form fields (label, wrapper, and error) and improves response-automation behavior.

### New

- Adds support for `unShowFieldTemplate` and `orientation` across every refactored form component.

### Improvements

- Introduces a shared internal service (FieldTemplate) to centralize FieldWrapper, FieldLabel, and FieldError rendering, reducing duplication across Checkbox, CurrencyInput, ImageUpload, Input, MultiSelect, PhoneInput, RadioGroup, RichText, Select, and Switch.
- Improves `useAutomation`'s behavior: adds automatic scrolling to the field with an error and prioritizes showing the first field error in toasts.

---

## v3.0.1-beta.140

Date: 2026-06-09

Incremental documentation update.

### New

- Adds documentation for the Calendar component.

---

## v3.0.1-beta.139

Date: 2026-06-02

First official stable version of the documented ecosystem.

### New

- Consolidates the official documentation for components, hooks, providers, and services across every package (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).
