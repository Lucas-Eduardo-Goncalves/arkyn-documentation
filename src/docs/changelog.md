# Changelog

This document gathers the release history of Arkyn, from the most recent version to the oldest. Each entry is written from the perspective of the library's consumers: what actually changed in practice, not just which files were touched.

Versions marked with Breaking Changes have a dedicated section with a step-by-step migration guide in [breaking-changes](/docs/breaking-changes).

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
