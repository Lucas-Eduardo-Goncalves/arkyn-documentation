# Arkyn Releases

This file centralizes release notes for the documentation and package set of the Arkyn ecosystem.

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

### Stable Baseline

- Version `3.2.0` establishes the first stable milestone for everything currently documented.
- All scope published in the documentation is included in this version baseline delivery.
- The documented capabilities are under continuous implementation, with incremental refinements compatible with this stable baseline.

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

### Documentation Scope Included In v3.2.0

- Package introduction and general navigation sections.
- Catalog of `@arkyn/components` components, hooks, providers, and services.
- Published guides in `guides/`.
- Full `server/` content (responses, services, utilities, and validations).
- Full `shared/` content (formats, generators, parsers, services, and utilities).
- Full `templates/` content.
- Supporting examples and styles published in `_examples/` and `_styles/`.

### Notes

- This release defines contract stability for what is currently documented.
- Future evolutions will be published in new changelog entries, preserving compatibility whenever possible.
