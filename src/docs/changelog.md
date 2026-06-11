# Arkyn Releases

This file centralizes release notes for the documentation and package set of the Arkyn ecosystem.

## Stable Baseline

- Version `3.2.0` establishes the first stable milestone for everything currently documented.
- All scope published in the documentation is included in this version baseline delivery.
- The documented capabilities are under continuous implementation, with incremental refinements compatible with this stable baseline.

## Documentation Scope Included In v3.2.0

- Package introduction and general navigation sections.
- Catalog of `@arkyn/components` components, hooks, providers, and services.
- Published guides in `guides/`.
- Full `server/` content (responses, services, utilities, and validations).
- Full `shared/` content (formats, generators, parsers, services, and utilities).
- Full `templates/` content.
- Supporting examples and styles published in `_examples/` and `_styles/`.

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
