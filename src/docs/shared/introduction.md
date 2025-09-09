# Introduction to shared

The `@arkyn/shared` package is a robust and versatile utility library designed to accelerate application development by providing a set of ready-to-use functions that solve common everyday problems.

From formatting and validating data specific to the Brazilian context, such as CPF, CNPJ, and CEP, to generating unique IDs and manipulating strings, `@arkyn/shared` encapsulates complex logic into simple, easy-to-use methods.

It's important to note that `@arkyn/shared` has a direct dependency on the `@arkyn/templates` package. Therefore, when installing `shared`, `templates` will be required. Doing so will ensure that all features that depend on templates, such as currency formatting, work correctly.

## Installation

To start using the package in your project, install it using your preferred package manager:

```bash
bun add @arkyn/shared@3.0.1-beta.33 @arkyn/templates@3.0.1-beta.33
```

## Overview

The package is organized into four main categories of functionality to make it easier to find and use the utilities:

- **Validations**: Contains functions to validate various types of data, such as documents (`validateCPF`, `validateCNPJ`), dates (`validateDate`), passwords (`validatePassword`), and more.

- **Formatters**: Offers a variety of functions for formatting data for display, such as currencies (formatToCurrency), dates (formatDate), documents (formatToCPF, formatToCNPJ), and other common formats.

- **Generators**: Useful functions for creating data, such as unique identifiers (generateID) or slugs from strings (generateSlug).

- **Services**: A collection of various utilities that solve specific tasks, such as masking sensitive data (maskSensitiveData), removing non-numeric characters (removeNonNumeric), or calculating installments (calculateCardInstallment).

With these utilities, you can develop more robust and consistent applications with less code and greater productivity. Browse the side menu to explore detailed documentation for each available function.
