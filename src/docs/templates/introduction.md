# Introduction to templates

The `@arkyn/templates` package is a companion library that provides a set of ready-to-use data structures and constants designed to streamline the development of features that rely on standardized information, such as country lists or currency settings.

Instead of recreating these structures in each project, `@arkyn/templates` offers a centralized and well-organized source, saving time and ensuring consistency.

## Installation

To start using the package in your project, install it using your preferred package manager:

```bash
bun add @arkyn/templates@3.0.1-beta.33
```

## Overview

The package consists of modules that export useful data for various purposes:

- **`countries`**: Provides a complete list of countries, including name, dialing code, ISO code, flag URL, and formatting mask for phone numbers. Ideal for country selectors and contact forms.

- **`countryCurrencies`**: Provides a mapping of currency codes to locale settings, making it easier to format monetary values ​​according to each country's conventions.

Browse the side menu to explore detailed documentation for each template and see examples of how to integrate them into your application.
