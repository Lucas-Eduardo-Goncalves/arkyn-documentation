# Arkyn Releases

This file centralizes release notes for the documentation and package set of the Arkyn ecosystem.

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
