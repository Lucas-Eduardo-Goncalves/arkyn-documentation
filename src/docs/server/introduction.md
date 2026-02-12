# Introduction to `@arkyn/server`

`@arkyn/server` is a comprehensive server-side utility library designed for building robust HTTP APIs. It provides standardized HTTP responses, validation utilities, form parsing, and debugging tools that integrate seamlessly with modern web frameworks like React Router, Remix, and Hono.

## Why `@arkyn/server`?

Building APIs requires consistent error handling, response formatting, and input validation. `@arkyn/server` solves these challenges by providing a unified set of tools that ensure your server responses are predictable, well-structured, and easy to debug.

**Key benefits:**

- **Standardized responses:** Pre-built HTTP response classes for both success (200, 201, 204, 302) and error (400, 401, 403, 404, 409, 422, 500, 501, 502) scenarios
- **Built-in debugging:** Automatic console logging showing exactly where responses originated in your codebase
- **Form validation:** Seamless integration with Zod schemas for both sync and async validation
- **Type-safe:** Written in TypeScript with full type definitions for excellent IDE support
- **Framework agnostic:** Works with any framework that uses the Web API `Request` and `Response` objects

## Installation

```bash
npm install @arkyn/server zod
```

or with bun:

```bash
bun add @arkyn/server zod
```

## Module Overview

The library is organized into five main categories, each serving a specific purpose:

### Bad Responses

Standardized HTTP error response classes that automatically emit debug logs and provide consistent response structures. Includes `BadRequest` (400), `Unauthorized` (401), `Forbidden` (403), `NotFound` (404), `Conflict` (409), `UnprocessableEntity` (422), `ServerError` (500), `NotImplemented` (501), and `BadGateway` (502).

```ts
import { BadRequest, NotFound, UnprocessableEntity } from "@arkyn/server";

// Throw errors with descriptive messages
throw new NotFound("User not found");

// Form validation errors with field-specific messages
throw new UnprocessableEntity({
  message: "Validation failed",
  fieldErrors: { email: "Invalid email format" },
  fields: { email: "invalid-email" },
});
```

### Success Responses

Standardized HTTP success response classes for successful operations. Includes `Success` (200), `Created` (201), `NoContent` (204), `Updated` (200), and `Found` (302).

```ts
import { Created, Success, NoContent } from "@arkyn/server";

// Return created resource
return new Created("User created successfully", {
  id: "123",
  name: "John",
}).toResponse();

// Return data
return new Success("Users retrieved", users).toJson();

// No content response
return new NoContent("Resource deleted").toResponse();
```

### Services

Service classes for API communication, debugging, and logging configuration.

```ts
import { ApiService, DebugService, LogService } from "@arkyn/server";

// Configure API client
const api = new ApiService({
  baseUrl: "https://api.example.com",
  baseHeaders: { "Content-Type": "application/json" },
  enableDebug: true,
});

const users = await api.get("/users", { urlParams: { page: "1" } });

// Configure debug service for accurate caller detection
DebugService.setIgnoreFile("httpAdapter.ts");

// Configure log service for centralized logging
LogService.setConfig({
  trafficSourceId: "my-app",
  userToken: "auth-token",
});
```

### Utilities

Functions for form parsing, schema validation, request handling, and debugging.

```ts
import { SchemaValidator, formParse, getScopedParams } from "@arkyn/server";
import { z } from "zod";

// Schema validation with multiple strategies
const schema = z.object({ name: z.string().min(1), email: z.string().email() });
const validator = new SchemaValidator(schema);

validator.isValid(data); // Boolean check
validator.validate(data); // Throws ServerError
validator.formValidate(data); // Throws UnprocessableEntity

// Extract scoped query parameters
const filters = getScopedParams(request, "filter");
// ?filter:status=active&filter:type=user → { status: "active", type: "user" }
```

### Validations

Async validation functions for common data types including email (with DNS verification), Brazilian documents (CPF, CNPJ, CEP, RG), phone numbers, passwords, and dates.

```ts
import { validateEmail, validateCpf, validateCnpj } from "@arkyn/server";

// Email validation with DNS verification
const isValidEmail = await validateEmail("user@example.com");

// Document validation
const isValidCpf = await validateCpf("123.456.789-09");
const isValidCnpj = await validateCnpj("12.345.678/0001-90");
```

## Design Philosophy

`@arkyn/server` follows these core principles:

1. **Consistency:** All responses follow the same structure, making API consumption predictable
2. **Debuggability:** Built-in debug logging shows exactly where responses originated
3. **Flexibility:** Use `toResponse()` for standard responses or `toJson()` for `Response.json()` alternative
4. **Integration ready:** Works seamlessly with Arkyn's frontend components for form error handling
