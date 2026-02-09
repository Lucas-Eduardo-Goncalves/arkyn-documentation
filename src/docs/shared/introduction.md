# Introduction to `@arkyn/shared`

`@arkyn/shared` is a comprehensive utility library designed to provide a collection of well-tested, reusable functions for common development tasks. Built with TypeScript and optimized for modern JavaScript environments, it offers a modular approach to handling data formatting, generation, parsing, validation, and general-purpose utilities.

## Why `@arkyn/shared`?

When building modern applications, developers often find themselves writing the same utility functions repeatedly across different projects. `@arkyn/shared` solves this problem by providing a curated set of tools that handle common tasks with a consistent, well-documented API.

**Key benefits:**

- **Type-safe:** Written in TypeScript with full type definitions for excellent IDE support and compile-time safety
- **Modular:** Import only what you need—each function is independently exportable to keep your bundle size minimal
- **Well-documented:** Every function includes comprehensive documentation with usage examples
- **Battle-tested:** Functions are designed to handle edge cases and provide meaningful error messages
- **Zero dependencies:** Lightweight and self-contained, with no external runtime dependencies

## Installation

**Important:** `@arkyn/templates` is a mandatory peer dependency for `@arkyn/shared`. This dependency is required because several formatting and parsing utilities rely on predefined templates and patterns provided by `@arkyn/templates` to ensure consistent behavior across the package.

```bash
npm install @arkyn/shared @arkyn/templates
```

or with bun:

```bash
bun add @arkyn/shared  @arkyn/templates
```

## Module Overview

The library is organized into five main categories, each serving a specific purpose:

### Formats

Functions for transforming and formatting data into standardized string representations. Includes formatters for dates, currencies (22+ international currencies), Brazilian documents (CPF, CNPJ, CEP), phone numbers, and text manipulation utilities.

```ts
import { formatDate, formatToCurrency, formatToCpf } from "@arkyn/shared";

formatDate(["25/12/2025"], "brazilianDate", "YYYY-MM-DD");
// → "2025-12-25"

formatToCurrency(1234.56, "BRL");
// → "R$ 1.234,56"

formatToCpf("12345678909");
// → "123.456.789-09"
```

### Generators

Utilities for creating unique identifiers, slugs, and other generated content. Perfect for database IDs, URL-friendly strings, and dynamic content generation.

```ts
import { generateId, generateSlug, generateColorByString } from "@arkyn/shared";

generateId("text", "v7");
// → "018e4c5a-1b2c-7d3e-8f4a-5b6c7d8e9f0a"

generateSlug("Hello, World! This is a Test.");
// → "hello-world-this-is-a-test"

generateColorByString("user@email.com");
// → "#a3b2c1" (consistent color for the same input)
```

### Parsers

Functions for extracting, transforming, and sanitizing data. Includes tools for handling sensitive information, parsing dates, and processing large data fields.

```ts
import { parseSensitiveData, parseToDate } from "@arkyn/shared";

parseSensitiveData('{"password":"secret123"}', ["password"]);
// → '{"password":"****"}'
```

### Services

Service classes that encapsulate complex validation and business logic. These provide reusable, stateful utilities for common operations like date validation with leap year support.

```ts
import { ValidateDateService } from "@arkyn/shared";

const validator = new ValidateDateService();
validator.validateDateParts(2024, 2, 29); // Validates leap year date
```

### Utilities

General-purpose helper functions for common tasks such as HTML processing, financial calculations, string manipulation, and data cleaning.

```ts
import { stripHtmlTags, calculateCardInstallment, isHtml } from "@arkyn/shared";

stripHtmlTags("<p>Hello <strong>World</strong></p>");
// → "Hello World"

calculateCardInstallment({ cashPrice: 1000, numberInstallments: 12 });
// → { totalPrice: 1425.60, installmentPrice: 118.80 }
```

## Design Philosophy

`@arkyn/shared` follows these core principles:

1. **Predictable behavior:** Functions behave consistently and throw meaningful errors when inputs are invalid
2. **Immutability:** Functions never mutate input data—they always return new values
3. **Explicit over implicit:** Required parameters are clearly documented, with sensible defaults for optional ones
4. **Internationalization ready:** Built-in support for Brazilian formats (CPF, CNPJ, CEP, phone) and 22+ international currencies

## Getting Started

Explore the documentation sections to learn about each function in detail:

- [**Formats**](/docs/shared/formats) — Data formatting utilities
- [**Generators**](/docs/shared/generators) — ID and content generation
- [**Parsers**](/docs/shared/parsers) — Data parsing and transformation
- [**Services**](/docs/shared/services) — Validation and business logic services
- [**Utilities**](/docs/shared/utilities) — General-purpose helper functions
