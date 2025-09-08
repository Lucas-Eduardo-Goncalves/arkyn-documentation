import type { MenuType } from "./_type";

const SERVER_MENU: MenuType[] = [
  {
    label: "Introduction",
    to: "/server/introduction",
  },
  {
    label: "Bad Responses",
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
        label: "ApiServices",
        to: "/server/services/api-service",
      },
      {
        label: "ArkynLogService",
        to: "/server/services/arkyn-log-service",
      },
      {
        label: "decodeErrorMessageFromRequest",
        to: "/server/services/decode-error-message-from-request",
      },
      {
        label: "decodeRequestBody",
        to: "/server/services/decode-request-body",
      },
      {
        label: "errorHandler",
        to: "/server/services/error-handler",
      },
      {
        label: "formParse",
        to: "/server/services/form-parse",
      },
      {
        label: "getCaller",
        to: "/server/services/get-caller",
      },
      {
        label: "getScopedParams",
        to: "/server/services/get-scoped-params",
      },
      {
        label: "httpDebug",
        to: "/server/services/http-debug",
      },
      {
        label: "HttpDebugService",
        to: "/server/services/http-debug-service",
      },
      {
        label: "SchemaValidator",
        to: "/server/services/schema-validator",
      },
    ],
  },
];

export { SERVER_MENU };
