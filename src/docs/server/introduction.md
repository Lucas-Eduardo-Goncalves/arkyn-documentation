# Introduction to @arkyn/server

The `@arkyn/server` package is a library for Node.js designed to accelerate and simplify the development of back-end applications. It offers a set of tools and utilities to handle common tasks, such as handling HTTP requests and responses, data validation, and much more.

## Installation

To start using `@arkyn/server`, you can install it in your project using your preferred package manager:

```bash
npm install @arkyn/server
```

```bash
yarn add @arkyn/server
```

```bash
pnpm add @arkyn/server
```

```bash
bun add @arkyn/server
```

## Overview

The package is divided into several modules to organize its functionalities:

- **`successResponses`**: Functions to return standardized successful HTTP responses (e.g., `Created`, `Success`, `NoContent`).
- **`badResponses`**: Functions to return standardized HTTP error responses (e.g., `BadRequest`, `NotFound`, `ServerError`).
- **`services`**: A set of utilities for tasks like validating schemas, parsing forms, and decoding request bodies.
- **`instances`**: Utilities to create pre-configured instances, like an API client.

With these utilities, you can create robust and consistent APIs with less code and more productivity. Explore the documentation of each module to see detailed examples and use cases.
