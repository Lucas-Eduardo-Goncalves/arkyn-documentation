# Arkyn Releases

This file centralizes release notes for the documentation and package set of the Arkyn ecosystem.

## v3.0.1-beta.172

Date: 2026-06-29

Status: VSCode workspace settings, Biome rule tuning, and CSS rule ordering fixes across `Badge`, `Button`, `Popover`, and `Table` components.

### Changes By Package

- `@arkyn/components`
  - **`Table / TableBody`: added missing empty-state styles** — `.arkynTableBodyEmptyLine > td > div` now has explicit layout rules: `display: flex`, `align-items: center`, `justify-content: center`, `text-align: center`, `white-space: nowrap`, `font-size: 14px`, `font-weight: 400`, and `color: var(--text-body)`. Previously the empty-line div had no layout, causing its content to render unaligned when a table had no rows.
  - **CSS rule ordering fixes in `Badge`, `Button`, `Popover`, and `Table`** — rules were reordered within their respective stylesheets to follow a consistent pattern (base/structural rules first, then variants/states). No selectors, properties, or values were changed; this is a cosmetic reorganization aligned with the Biome formatter output.
  - **`Slider`: import statement reformatted to multiline** — the single-line `import { ..., useCallback, useEffect, useRef, useState }` introduced in beta.171 was split into a multiline block by the Biome formatter. No logic change.

- Repository / Tooling
  - **Added `.vscode/settings.json`** — workspace-level VSCode configuration committed for consistent developer experience:
    - Prettier disabled (`"prettier.enable": false`)
    - Biome set as the default formatter for JS, JSX, TS, TSX, and JSON
    - Format on save enabled (`"editor.formatOnSave": true`)
    - Biome organize-imports and fix-all code actions set to `"explicit"` (runs on save)
  - **`biome.json`: two additional rules set to `off`**
    - `a11y/useKeyWithClickEvents`: disabled — components use click-only interactions intentionally (e.g. overlay dismissal), and adding keyboard handlers for all of them is out of scope for this release.
    - `complexity/noStaticOnlyClass`: disabled — some service classes use only static methods by design (e.g. `SchemaValidator`-style patterns in server). Enforcing this rule would require a structural refactor unrelated to current goals.

### Breaking Changes

None.

### Notes

- The `.vscode/settings.json` file only affects local VSCode installations. It has no effect on the published packages or CI behavior.
- The CSS reorderings in `Badge`, `Button`, and `Popover` are purely cosmetic and do not affect rendered output.
- The `TableBody` empty-state fix corrects a visual regression — the empty-line text was rendering but without centering or the correct color token applied.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.171

Date: 2026-06-29

Status: Type safety sweep across components, server, and shared — replaces implicit `any` casts with intentional annotations, fixes React key warnings in `Pagination`, and improves handler stability in `Slider`.

### Changes By Package

- `@arkyn/components`
  - **Fixed React key warning in `Pagination`** — `previousPages.map()` and `nextPages.map()` were using the array index as `key`. Changed to use the page number value itself (`key={page}`), which prevents incorrect DOM reconciliation when the page list changes.
  - **Wrapped `Slider` event handlers with `useCallback`** — `handleMouseUp` and `handleMouseMove` are now memoized. `handleMouseMove` declares its dependency array `[disabled, isDragging, onChange]`, preventing stale closure bugs when those values change mid-drag.
  - **`FacebookPixel`: replaced `return <></>` with `return null` in dev guard** — returning an empty fragment for a no-op render is semantically incorrect; `null` is the idiomatic React signal for "render nothing".
  - **`GoogleAnalytics`: return type corrected to `JSX.Element | null`** — the previous return type `JSX.Element` was wrong because the component returns `null` in non-production environments. The signature now accurately reflects runtime behavior.
  - **`MapView`: renamed `Map` import alias from mapbox-gl to `MapboxMap`** — avoids shadowing the global `Map` built-in. Non-null assertions (`!`) on `mapRef.current` and `mapContainerRef.current` replaced with explicit casts (`as MapboxMap`, `as HTMLDivElement`) for stricter type safety.
  - **`useDrawer` and `useModal`: added `biome-ignore` annotations for intentional generic `any`** — the `T = any` default in overloaded signatures is intentional for backwards-compatible generics. Annotations document this intent and suppress Biome lint warnings without changing behavior.
  - **Broad `biome-ignore lint/suspicious/noExplicitAny` annotations added** — applied across `FullCalendar`, `Calendar`, `MultiSelect`, `Select`, `RichText`, `Checkbox`, `Input`, `Textarea`, `PhoneInput`, `MaskedInput`, `CurrencyInput`, `Switch`, `SearchPlaces`, `MapView`, `Providers` (form, drawer, modal), and `iconRenderer`. All usages were pre-existing and intentional; annotations suppress false-positive Biome errors without any logic change.

- `@arkyn/server`
  - **`schemaValidator.ts`: `catch (error: any)` replaced with typed catch** — `catch (error)` now uses an explicit cast `error as z.ZodError` when passing to `formatErrorMessage`, which is more correct and avoids suppressing the error type entirely.
  - **`_makeRequest.ts`: `biome-ignore` annotations added to API type declarations** — `body`, `response`, and the generic `T = any` in `ApiSuccessResponse`, `ApiFailedResponse`, and `ApiResponseDTO` are intentionally typed as `any` because the API layer must handle arbitrary payloads. Annotations document this intent.
  - **HTTP response classes and API methods annotated** — `badResponses`, `successResponses`, `deleteRequest`, `getRequest`, `patchRequest`, `postRequest`, `putRequest`, `_logRequest`, `logMapperService`, `decodeRequestBody`, `decodeRequestErrorMessage`, `errorHandler`, `formAsyncParse`, `formParse`: explicit annotations added where Biome flagged implicit `any`, all intentional.

- `@arkyn/shared`
  - **`parseSensitiveData.ts`: accumulator type narrowed from `{} as any` to `{} as Record<string, unknown>`** — the reducer in `recursiveMask` now uses a more accurate type for the accumulator object, improving type inference for callers while preserving the same runtime behavior.
  - **`generate-exports.ts`: type inference improvements** — minor type annotation adjustments to align with Biome's stricter inference rules.

### Breaking Changes

None.

### Notes

- No behavioral changes were introduced. This commit is a type-safety pass enforcing the rules added to `biome.json` in beta.170.
- The `biome-ignore` annotations with `// intentional` are the agreed-upon pattern for cases where `any` is a deliberate design decision (e.g. generic API responses, plugin-style event data).
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.170

Date: 2026-06-28

Status: Infrastructure modernization — CI/CD pipeline, package exports, dependency management, automated versioning, and Biome integration across all packages.

### Changes By Package

- `@arkyn/components`
  - Moved all external UI dependencies (`framer-motion`, `mapbox-gl`, `slate`, `slate-history`, `slate-react`, `@react-google-maps/api`, `react-hot-toast`, `react-scroll`, `html-react-parser`, `@react-input/mask`) from `dependencies` to `peerDependencies`.
  - Added `exports` field to `package.json` with granular module-level entry points under `dist/modules/`.
  - Added `generate-exports.ts` script to automatically generate the exports map from `src/index.ts`.
  - Enabled `module preservation` output mode in Vite for modular distribution.
  - Added `"sideEffects": ["*.css"]` to preserve CSS imports during tree-shaking.
  - Renamed CSS output to `style.css`; added `styles.d.ts` for stylesheet typing.
  - Added `publish:beta` and `publish:latest` scripts to `package.json`.
  - Added `engines` field specifying minimum Node.js and Bun versions.
  - Removed `.npmignore` in favor of the `files` field in `package.json`.
  - Removed obsolete documentation files: `documentation/css/reset.css`, `documentation/css/variables.css`, `documentation/index.html`, `documentation/src/app.tsx`, `documentation/src/main.tsx`, `documentation/tsconfig.json`, and `documentation/vite.config.ts`.
  - Enabled `strict: true` and `noUnusedLocals: true` in `tsconfig.json`.
  - Refactored `fireToast` in `useAutomation.ts` to use `useCallback`, preventing function recreation on every render.
  - Added `test:watch` script.

- `@arkyn/server`
  - Added `exports` field to `package.json`; entry point migrated from `bundle.js` to `index.js`.
  - Added `generate-exports.ts` script.
  - Added `"sideEffects": false` for full tree-shaking support.
  - Added `publish:beta` and `publish:latest` scripts.
  - Added `engines` field.
  - Removed `.npmignore` in favor of `files`.
  - Enabled `strict: true` and `noUnusedLocals: true` in `tsconfig.json`.
  - Corrected test endpoint URL in `logService.spec.ts` to reflect the new endpoint.
  - Improved debug log output in `BadResponse` and `SuccessResponse` tests with a consistent color scheme.
  - Added `test:watch` script.
  - Adjusted Vitest timeout configuration.

- `@arkyn/shared`
  - Added `exports` field to `package.json`; entry point migrated from `bundle.js` to `index.js`.
  - Added `generate-exports.ts` script.
  - Added `"sideEffects": false` for full tree-shaking support.
  - Added `publish:beta` and `publish:latest` scripts.
  - Added `engines` field.
  - Removed `.npmignore` in favor of `files`.
  - Enabled `strict: true` and `noUnusedLocals: true` in `tsconfig.json`.
  - Rewrote `forEach` in `logMapperService.ts` with an explicit block for improved readability.
  - Added `test:watch` script.
  - Adjusted Vitest timeout configuration.

- `@arkyn/templates`
  - Added `exports` field to `package.json`; entry point migrated from `bundle.js` to `index.js`.
  - Added `generate-exports.ts` script.
  - Added `"sideEffects": false` for full tree-shaking support.
  - Added `publish:beta` and `publish:latest` scripts.
  - Added `engines` field.
  - Removed `.npmignore` in favor of `files`.
  - Enabled `strict: true` and `noUnusedLocals: true` in `tsconfig.json`.

### Monorepo / CI/CD

- Added `.github/workflows/beta.yml` — automated publish workflow triggered on push to `develop`, executing the following steps in order:
  1. Checkout (`actions/checkout@v5`)
  2. Dependency installation with Bun
  3. `@types/*` in `dependencies` integrity check
  4. Security audit (`bun audit` across all packages)
  5. Type check (`bun run all:typecheck`)
  6. Tests (`bun run all:test`)
  7. Build (`bun run all:build`) — `templates` and `shared` first, then `components` and `server`
  8. Publish (`bun run all:publish:beta`) via NPM using a token from GitHub Secrets
- Configured NPM authentication via `setup-node` with `registry-url` and `NODE_AUTH_TOKEN`; job permissions set to `id-token` and `contents`.
- Added CI step that scans all `packages/*/package.json` files and fails the build if any `@types/*` package is listed under `dependencies` instead of `devDependencies`.
- Added `all:publish:beta` and `all:publish:latest` scripts at the monorepo root to publish all packages in a single command.
- Added `generate-version.ts` in each package with automatic version increment logic. The following scripts are available at the monorepo root:
  - `release:beta` — increments the beta suffix (`beta.169` → `beta.170`)
  - `release:patch` — patch bump (`3.0.1` → `3.0.2`)
  - `release:minor` — minor bump (`3.0.x` → `3.1.0`)
  - `release:major` — major bump (`3.x.x` → `4.0.0`)
- Added `biome.json` at the project root with `complexity`, `security`, and `a11y` rule sets; `--ci` flag added to the lint command in the workflow.
- Added `.github/dependabot.yml` for automated dependency update PRs across all packages in the monorepo.
- Updated repository URLs in all `package.json` files to the new `arkyn-library` repository.
- Removed `.DS_Store` files from git history (root, `packages/`, `packages/server/`, `packages/shared/`).
- Translated and restructured `CHANGELOG.GUIDE.md` from Portuguese to English.

### Breaking Changes

- **`@arkyn/components` peer dependencies** — the following packages were moved from `dependencies` to `peerDependencies` and must now be installed in the consumer project: `framer-motion`, `mapbox-gl`, `slate`, `slate-history`, `slate-react`, `@react-google-maps/api`, `react-hot-toast`, `react-scroll`, `html-react-parser`, and `@react-input/mask`. Projects that relied on transitive installation of these packages must add them explicitly.
- **Minimum React version corrected** — the `peerDependencies` requirement for `react` and `react-dom` was corrected from `>=19.2.6` to `>=18.0.0`, restoring compatibility with React 18 projects.

### Notes

- No user-facing features were added in this version range (`beta.149`–`beta.170`). All changes are tooling, packaging, and CI/CD infrastructure.
- The addition of the `exports` field means consumers using deep import paths outside the documented API surface may need to update their import statements.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.148

Date: 2026-06-23

Status: Controlled value support for `FullCalendar` and `Calendar` components, with aligned view-date prop naming.

### Changes By Package

- `@arkyn/components`
  - **Added `viewValue` and `defaultViewValue` props to `FullCalendar`** — replaces the previous `value` / `defaultValue` naming for the focused date. `viewValue` enables external controlled navigation (e.g. programmatically jumping to a specific month), while `defaultViewValue` sets the initial view date on mount. These props are forwarded directly to `FullCalendarProvider`.
  - **Added `value`, `viewValue`, and `defaultViewValue` props to `Calendar` (single and range modes)** — `value` enables full controlled selection of the active date (single: `Date`, range: `[Date, Date]`), while `viewValue` and `defaultViewValue` control which month/year is currently displayed in the calendar header. All three props are available on both `SingleCalendarProps` and `RangeCalendarProps` and are forwarded to `CalendarProvider`.
  - **Adjusted border-radius on `FullCalendar` view containers** — `DayCalendarContainer`, `WeekCalendarTableContainer`, and `MonthlyCalendarTableContainer` now consistently apply `border-radius: 8px`, improving visual alignment across views.

### Breaking Changes

- **`FullCalendarProps.defaultValue` renamed to `defaultViewValue`** — any consumer passing `defaultValue` to `FullCalendar` to set the initial focused date must rename it to `defaultViewValue`. The previous prop is silently ignored in this version.

  ```tsx
  // Before (v3.0.1-beta.147)
  <FullCalendar defaultValue={new Date(2026, 5, 1)} />

  // After (v3.0.1-beta.148)
  <FullCalendar defaultViewValue={new Date(2026, 5, 1)} />
  ```

### Notes

- The `value` / `viewValue` / `defaultViewValue` naming convention is now consistent between `FullCalendar` and `Calendar`: `value` controls the selected date(s), `viewValue` controls the currently displayed period, and `defaultViewValue` sets the initial displayed period.
- No behavioral changes were made to event rendering, blocked timestamps, or click callbacks introduced in v3.0.1-beta.147.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.147

Date: 2026-06-23

Status: `FullCalendar` API refinements with blocked timestamps support, date cell interaction, and default orientation correction extended to remaining form components.

### Changes By Package

- `@arkyn/components`
  - **Extended default `orientation` correction to additional form components** — the default value of the `orientation` prop was changed from `"horizontal"` to `"vertical"` in the following components: `ImageUpload`, `MultiSelect`, `RadioGroup`, `RichText`, and `Select`. This continues the correction applied to `PhoneInput` in v3.0.1-beta.145, completing the alignment across all form components that support the field-template layout.
  - **Added `blockedTimestamps` prop to `FullCalendar`** — accepts an array of `BlockTimestamp` objects (`{ initialDate: Date; endDate: Date }`). Time slots and date cells falling within a blocked range are visually marked as unavailable and made non-interactive, preventing the user from clicking them.
  - **Added `onClickDate` prop to `FullCalendar`** — a new optional callback `(date: Date) => void` fired when the user clicks an available (non-blocked) cell in any view (day, week, or month). Provides a uniform way to respond to date selection across all three calendar views.
  - **Fixed event click propagation** — clicking an event chip no longer bubbles up to the parent cell, preventing unintended `onClickDate` triggers when the user intends to interact with an event rather than the underlying date slot.
  - **Introduced `BlockTimestamp` type** — a new exported type (`{ initialDate: Date; endDate: Date }`) used to describe unavailable time ranges passed to `blockedTimestamps`.
  - **Updated JSDoc** for `FullCalendarEvent` and `BlockTimestamp`, including updated usage examples reflecting the new prop names and callback signatures.

### Breaking Changes

- **`FullCalendarEvent.date` renamed to `FullCalendarEvent.initialDate`** — the property used to define an event's start date/time was renamed for naming consistency with `BlockTimestamp`. Any consumer passing events to `FullCalendar` must rename `date` to `initialDate` in every event object.

  ```tsx
  // Before (v3.0.1-beta.146)
  events={[{ title: "Reunião", date: new Date(2026, 5, 23, 10, 0) }]}

  // After (v3.0.1-beta.147)
  events={[{ title: "Reunião", initialDate: new Date(2026, 5, 23, 10, 0) }]}
  ```

- **`FullCalendarProps.defaultView` removed** — the prop that set the initial calendar view (`"day"` | `"week"` | `"month"`) has been removed. The component now always initializes in month view. If your integration relied on `defaultView="day"` or `defaultView="week"`, the calendar will now open in month view by default.

- **`FullCalendarProps.onChange` removed** — the callback that fired on selected date changes has been removed. Use `onClickDate` (for user-initiated date cell clicks) or `onChangeView` (for navigation between periods) as replacements depending on the intended behavior.

- **Default `orientation` is now `"vertical"` in `ImageUpload`, `MultiSelect`, `RadioGroup`, `RichText`, and `Select`** — any of these components rendered without an explicit `orientation` prop will now display in vertical layout instead of horizontal. Pass `orientation="horizontal"` explicitly to preserve the previous behavior.

### Notes

- The `FullCalendar` breaking changes affect only consumers who integrated the component after its introduction in v3.0.1-beta.146.
- The orientation correction completes the standardization begun in v3.0.1-beta.145 (`PhoneInput`), ensuring all form components that expose the `orientation` prop default to `"vertical"` — consistent with the field-template layout convention used across the library.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).


## v3.0.1-beta.146

Date: 2026-06-13

Status: New `FullCalendar` component with day, week, and month views.

### Changes By Package

- `@arkyn/components`
  - Added new `FullCalendar` component — an interactive calendar supporting three built-in views: **day**, **week**, and **month**.
  - The component is composed of the following internal sub-modules:
    - `FullCalendarProvider` — React context that manages navigation state (`viewDate`), event list, and navigation actions (`nextDay`, `previousWeek`, `nextMonth`, etc.).
    - `ViewService` — pure service class responsible for computing time grids (hours list, 30-min slots from 08:00 to 18:00), weekly matrix, and monthly matrix with overflow cells from adjacent months.
    - `FullCalendarHeader` — header bar with a `CardTab` switcher (Dia / Semana / Mês) and `IconButton` chevron navigation, displaying the current date in `pt-BR` long format.
    - `DayCalendar` — day view composed of `DayCalendarContainer`, `DayCalendarRow`, and `DayCalendarEvent`.
    - `WeekCalendar` — week view composed of `WeekCalendarTableContainer`, `WeekCalendarTableHeader`, `WeekCalendarTableBody`, `WeekCalendarTableTd`, and `WeekCalendarEvent`.
    - `MonthlyCalendar` — month view composed of `MonthlyCalendarTableContainer`, `MonthlyCalendarTableHeader`, `MonthlyCalendarTableBody`, `MonthlyCalendarTableTd`, and `MonthlyCalendarEvent`.
  - `FullCalendar` accepts the following props:
    - `defaultView` — initial view (`"day"` | `"week"` | `"month"`). Default: `"month"`.
    - `defaultValue` — initial selected date. Defaults to today.
    - `events` — array of `FullCalendarEvent` objects (`title`, `date`, `endDate?`, `data?`, `scheme?`, `onClick?`).
    - `onChange` — callback fired when the selected date changes.
    - `onChangeView` — callback fired when the user navigates to a different period.
  - Event chips support five color schemes: `primary`, `success`, `warning`, `danger`, and `info`.
  - Exported `FullCalendar` from the package root (`packages/components/src/index.ts`).
  - Full JSDoc coverage added to the public component API.

### Notes

- This is a purely additive release; no existing component APIs or styles were modified.
- `FullCalendarProvider` exposes an internal `language` prop (defaults to `"pt-BR"`) for future localization support, but it is not yet part of the public `FullCalendar` API.
- The day view hour range is currently fixed at 08:00–18:00 in 30-minute increments.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).s

## v3.0.1-beta.145
Date: 2026-06-13

Status: Default orientation correction for PhoneInput.

### Changes By Package
- `@arkyn/components`
  - Corrected the default value of the `orientation` prop on `PhoneInput` from `"horizontal"` to `"vertical"`, aligning runtime behavior with the field template layout convention used by all other form components.
  - Updated JSDoc and inline type documentation to reflect the corrected default.

### Notes
- This is a behavioral correction: any `PhoneInput` rendered without an explicit `orientation` prop will now default to the vertical layout instead of horizontal.
- No other component APIs or styles were changed.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).

## v3.0.1-beta.144
Date: 2026-06-13

Status: Full JSDoc coverage across all packages and design token refinements in `@arkyn/components`.

### Changes By Package
- `@arkyn/components`
  - Added full JSDoc documentation to all components: Alert, AudioPlayer, AudioUpload, Badge, Button, CardTab, Checkbox, ClientOnly, CurrencyInput, Divider, Drawer, FacebookPixel, FieldError, FieldLabel, FieldWrapper, FileUpload, GoogleAnalytics, GoogleTagManager, IconButton, ImageUpload, Input, MapView, MaskedInput, Modal, MultiSelect, Pagination, PhoneInput, Popover, Radio, RichText, SearchPlaces, Select, Slider, Switch, Tab, Table, Textarea, and Tooltip.
  - Added full JSDoc documentation to all hooks: `useAutomation`, `useDrawer`, `useForm`, `useHydrated`, `useModal`, `useScopedParams`, `useScrollLock`, `useSearchAutomation`, `useSlider`, and `useToast`.
  - Added full JSDoc documentation to all providers: `DrawerProvider`, `FormProvider`, `ModalProvider`, `PlacesProvider`, and `ToastProvider`.
  - Added full JSDoc documentation to all services: `toHtml` and `toRichTextValue`.
  - Refined design tokens in `variables.css`:
    - Added `--white` as a first-class token.
    - Updated background tokens to the zinc scale (`--background`, `--card-foreground-primary`).
    - Updated text tokens to the zinc scale (`--text-heading`, `--text-body`, `--text-muted`).
    - Added `--spotlight-*-light` variants for all six color roles (primary, secondary, success, danger, info, warning).

- `@arkyn/server`
  - Added full JSDoc documentation to all bad responses, success responses, services (`ApiService`, `DebugService`, `LogService`), utilities, and validations.

- `@arkyn/shared`
  - Added full JSDoc documentation to all formats, generators, parsers, services, and utilities.

### Notes
- This release contains no behavioral or API changes. All modifications are documentation and design token updates.
- JSDoc coverage was applied uniformly across all three packages, aligning inline documentation style with the patterns established in prior releases.
- The zinc-scale token update in `variables.css` is a visual-only refinement; no component class names or CSS custom property names were changed.
- Version bumped across all packages (`@arkyn/components`, `@arkyn/server`, `@arkyn/shared`, `@arkyn/templates`).

## v3.0.1-beta.143
Date: 2026-06-11

Status: Visual style corrections for Button, IconButton, and CardTab components.

### Changes By Package
- `@arkyn/components`
  - Fixed outline variant background color for Button and IconButton, replacing --card-foreground-primary with --card for correct surface contrast.
  - Redesigned CardTab visual style:
    - CardTabContainer now uses a filled background (--card-foreground-primary) with internal padding and gap instead of a bordered frame, giving the tab strip a pill-container appearance.
    - CardTabButton default state updated to transparent background with a fixed height of 40px, rounded corners (6px), and heading-level text color (--text-heading).
    - Removed the border-right separator rule between tab buttons.
    - Hover and active states now apply a white background (--white) with a visible border (--border) instead of the previous primary-colored highlight.
### Notes
- All changes in this release are purely visual and do not affect component APIs or behavior.
- The CardTab redesign aligns its appearance with the rest of the component library's surface and border token conventions.
- Version bumped across all packages (@arkyn/components, @arkyn/server, @arkyn/shared, @arkyn/templates).

## v3.0.1-beta.142

Date: 2026-06-10

Status: Correction for the successful deployment of v3.0.1-beta.141, with a minor update to the changelog entry for clarity.

### Notes
- This release is a non-code update to ensure the changelog accurately reflects the changes made in v3.0.1-beta.141.

## v3.0.1-beta.141

Date: 2026-06-10

Status: Form field template standardization, component API expansion, and automation behavior update.

### Changes By Package
- `@arkyn/components`
  - Added a new shared FieldTemplate service to centralize FieldWrapper, FieldLabel, and FieldError rendering.
  - Refactored these components to use FieldTemplate:
    - Checkbox
    - CurrencyInput
    - ImageUpload
    - Input
    - MultiSelect
    - PhoneInput
    - RadioGroup
    - RichText
    - Select
    - Switch
  - Expanded component APIs with support for unShowFieldTemplate and orientation across the refactored form components.
  - Added or propagated showAsterisk, className, and errorMessage handling where needed to keep field template behavior consistent.
  - Updated RichText types to include className, unShowFieldTemplate, and orientation.
  - Added full JSDoc coverage for PhoneInput and updated JSDoc in the refactored components to describe the new field-template-related props.
  - Updated useAutomation behavior:
    - Added scroll support via cause.data.scrollTo using react-scroll.
    - Added first field error extraction from cause.fieldErrors for danger toast priority.
    - Reworked toast decision logic to use successResponses and badResponses.
    - Ignored the Unprocessable entity message in toast output.
    - Kept modal auto-close flow and centralized toast execution in a dedicated internal function.

### Notes
  - This release consolidates form field rendering patterns and reduces duplicated wrapper/label/error logic across components.
  - The update also improves response automation UX by aligning scroll and toast behavior with structured backend error payloads.
  - Scope reflects only what is currently staged in `@arkyn/components`.

## v3.0.1-beta.140

Date: 2026-06-09

Status: Incremental documentation update.

### Changes By Package

- `@arkyn/components`
  - Added documentation for the new [`Calendar`](/docs/components/components/calendar) component.

### Notes

- This release includes only the `Calendar` component addition.

## v3.0.1-beta.139

Date: 2026-06-02

Status: First official stable version of the documented ecosystem.


### Changes By Package

- `@arkyn/components`
  - Consolidated documentation for UI components, overlays, forms, feedback, media, and navigation.
  - Official hooks documented for automation, forms, hydration, overlays, search, slider, toast, and scroll lock.
  - Official providers documented for drawer, modal, form, and toast.
  - Rich text services documented (`toHtml` and `toRichTextValue`).

- `@arkyn/server`
  - Official documented structure for bad responses, success responses, services, utilities, and validations.
  - HTTP response standards, error handling, and validation flow support formalized in the baseline.

- `@arkyn/shared`
  - Official documented scope for formats, generators, parsers, services, and utilities.
  - Shared utility library consolidated as part of the stable foundation.

- `@arkyn/templates`
  - Official templates documented for countries, country-currencies, and brazilian-states.
  - Standardized utility data foundation for use across other packages.

### Notes

- This release defines contract stability for what is currently documented.
- Future evolutions will be published in new changelog entries, preserving compatibility whenever possible.
