import type { MenuType } from "./_type";

const SERVER_MENU: MenuType[] = [
  {
    label: "Introduction",
    to: "/server/introduction",
  },
  {
    label: "Bad responses",
    children: [
      {
        label: "BadGateway",
        to: "/server/bad-responses/bad-gateway",
      },
      {
        label: "BadRequest",
        to: "/server/bad-responses/bad-request",
      },
      {
        label: "Conflict",
        to: "/server/bad-responses/conflict",
      },
      {
        label: "Forbidden",
        to: "/server/bad-responses/forbidden",
      },
      {
        label: "NotFound",
        to: "/server/bad-responses/not-found",
      },
      {
        label: "NotImplemented",
        to: "/server/bad-responses/not-implemented",
      },
      {
        label: "ServerError",
        to: "/server/bad-responses/server-error",
      },
      {
        label: "Unauthorized",
        to: "/server/bad-responses/unauthorized",
      },
      {
        label: "UnprocessableEntity",
        to: "/server/bad-responses/unprocessable-entity",
      },
    ],
  },
  {
    label: "Success Responses",
    children: [
      {
        label: "Created",
        to: "/server/success-responses/created",
      },
      {
        label: "Found",
        to: "/server/success-responses/found",
      },
      {
        label: "NoContent",
        to: "/server/success-responses/no-content",
      },
      {
        label: "Success",
        to: "/server/success-responses/success",
      },
      {
        label: "Updated",
        to: "/server/success-responses/updated",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "ApiService",
        to: "/server/services/api-service",
      },
      {
        label: "DebugService",
        to: "/server/services/debug-service",
      },
      {
        label: "LogService",
        to: "/server/services/log-service",
      },
    ],
  },
  {
    label: "Utilities",
    children: [
      {
        label: "decodeRequestBody",
        to: "/server/utilities/decode-request-body",
      },
      {
        label: "decodeRequestErrorMessage",
        to: "/server/utilities/decode-request-error-message",
      },
      {
        label: "errorHandler",
        to: "/server/utilities/error-handler",
      },
      {
        label: "flushDebugLogs",
        to: "/server/utilities/flush-debug-logs",
      },
      {
        label: "formAsyncParse",
        to: "/server/utilities/form-async-parse",
      },
      {
        label: "formParse",
        to: "/server/utilities/form-parse",
      },
      {
        label: "getScopedParams",
        to: "/server/utilities/get-scoped-params",
      },
      {
        label: "SchemaValidator",
        to: "/server/utilities/schema-validator",
      },
    ],
  },
  {
    label: "Validations",
    children: [
      {
        label: "validateCep",
        to: "/server/validations/validate-cep",
      },
      {
        label: "validateCnpj",
        to: "/server/validations/validate-cnpj",
      },
      {
        label: "validateCpf",
        to: "/server/validations/validate-cpf",
      },
      {
        label: "validateDate",
        to: "/server/validations/validate-date",
      },
      {
        label: "validateEmail",
        to: "/server/validations/validate-email",
      },
      {
        label: "validatePassword",
        to: "/server/validations/validate-password",
      },
      {
        label: "validatePhone",
        to: "/server/validations/validate-phone",
      },
      {
        label: "validateRg",
        to: "/server/validations/validate-rg",
      },
    ],
  },
];

export { SERVER_MENU };
