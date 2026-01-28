# Introduction to @arkyn/shared

The `@arkyn/shared` package is a comprehensive utility library designed to simplify common programming tasks in TypeScript and JavaScript applications. It provides a robust collection of functions and services for data formatting, parsing, generation, and validation, helping developers write cleaner, more maintainable code while reducing boilerplate and repetitive logic.

## Overview

`@arkyn/shared` is built with developer experience in mind, offering type-safe utilities that handle everyday challenges such as:

- **Formatting data** for display (dates, currencies, phone numbers, documents)
- **Parsing and validating** user input and external data
- **Generating unique identifiers** and consistent values
- **Sanitizing and cleaning** strings and HTML content
- **Calculating financial values** with precision
- **Working with sensitive data** securely

The package is particularly useful for web applications, APIs, and services that need to handle user input, display formatted data, or process information from various sources consistently.

### Required Dependency

**Important:** `@arkyn/templates` is a mandatory peer dependency for `@arkyn/shared`. This dependency is required because several formatting and parsing utilities rely on predefined templates and patterns provided by `@arkyn/templates` to ensure consistent behavior across the package.

## Installation

To use `@arkyn/shared`, you need to install both the package and its required peer dependency:

```bash
npm install @arkyn/shared @arkyn/templates
```

or with bun:

```bash
bun add @arkyn/shared @arkyn/templates
```

## Core Concepts

### Formats

The formatting utilities transform raw data into human-readable, properly formatted strings. These functions are essential for displaying data to users in a consistent and culturally appropriate manner.

**Key features:**

- Support for multiple date formats (Brazilian, ISO, timestamp)
- Currency formatting with locale support
- Brazilian document formatting (CPF, CNPJ, CEP)
- Phone number formatting
- Text truncation with word boundaries
- Sensitive data masking

### Parsers

Parsers convert formatted strings back into usable data structures or validate and clean input data. These utilities are crucial for processing user input and external data sources.

**Key features:**

- Date string to Date object conversion with timezone support
- JSON field truncation for logging
- Sensitive data detection and masking
- Large field handling

### Generators

Generators create unique or consistent values based on input data. These utilities help with creating identifiers, colors, and URL-friendly strings.

**Key features:**

- UUID generation (v4 and v7) in text or binary format
- Deterministic color generation from strings
- URL-safe slug generation with accent removal

### Utilities

General-purpose utilities provide common functionality for string manipulation, validation, and calculations. These functions solve everyday programming challenges efficiently.

**Key features:**

- HTML tag detection and removal
- Currency and non-numeric character removal
- Quote management for strings
- Credit card installment calculations

### Services

Services provide more complex functionality with internal state management and validation logic. These classes offer structured approaches to specific domains.

**Key features:**

- Comprehensive date validation including leap years
- Month-specific day validation
- Input format validation

## Type Safety

All utilities in `@arkyn/shared` are written in TypeScript and provide full type definitions. This ensures:

- **Compile-time error detection** when using incorrect parameters
- **IntelliSense support** in modern IDEs
- **Type inference** for better developer experience
- **Function overloads** for flexible API usage

## Error Handling

The package follows a consistent error handling approach:

- **Validation errors** are thrown early with descriptive messages
- **Invalid input** is handled gracefully where appropriate
- **Error messages** clearly indicate what went wrong and how to fix it
- **Type guards** prevent invalid operations at compile time

## Performance

Performance considerations are built into the package:

- **Efficient regular expressions** for pattern matching
- **Minimal dependencies** to reduce bundle size
- **Pure functions** for better optimization
- **Cached calculations** where beneficial

## Browser and Node.js Support

The package is designed to work seamlessly in both browser and Node.js environments:

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Node.js** version 14 and above
- **TypeScript** version 4.5 and above recommended

## Getting Started

Import the utilities you need from the package:

```typescript
import {
  formatToCurrency,
  formatToPhone,
  generateId,
  parseToDate,
  stripHtmlTags,
} from "@arkyn/shared";

// Format a currency value
const price = formatToCurrency(1234.56);
console.log(price); // "R$ 1.234,56"

// Generate a unique identifier
const id = generateId("text", "v7");
console.log(id); // "018e3c5e-8c3a-7000-8000-000000000000"

// Parse a date string
const date = parseToDate(["25/12/2023", "15:30:00"], "brazilianDate", -3);
console.log(date); // Date object

// Clean HTML from user input
const clean = stripHtmlTags("<script>alert('xss')</script>Hello");
console.log(clean); // "Hello"
```
