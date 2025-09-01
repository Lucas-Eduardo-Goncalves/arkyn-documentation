import type { MenuType } from "./_type";

const API_MENU: MenuType[] = [
  {
    label: "Introduction",
    to: "/api/introduction",
  },
  {
    label: "CoreLog",
    children: [
      {
        label: "Introduction",
        to: "/api/core-log/introduction",
      },
      {
        label: "createCoreLog",
        to: "/api/core-log/create-core-log",
      },
      {
        label: "listCoreLogs",
        to: "/api/core-log/list-core-logs",
      },
    ],
  },
  {
    label: "CorePathname",
    children: [
      {
        label: "Introduction",
        to: "/api/core-pathname/introduction",
      },
      {
        label: "createCorePathname",
        to: "/api/core-pathname/create-core-pathname",
      },
      {
        label: "deleteCorePathname",
        to: "/api/core-pathname/delete-core-pathname",
      },
      {
        label: "listCorePathNames",
        to: "/api/core-pathname/list-core-path-names",
      },
    ],
  },
  {
    label: "Domain",
    children: [
      {
        label: "Introduction",
        to: "/api/domain/introduction",
      },
      {
        label: "createDomain",
        to: "/api/domain/create-domain",
      },
      {
        label: "deleteDomain",
        to: "/api/domain/delete-domain",
      },
      {
        label: "listDomains",
        to: "/api/domain/list-domains",
      },
    ],
  },
  {
    label: "HttpTraffic",
    children: [
      {
        label: "Introduction",
        to: "/api/http-traffic/introduction",
      },
      {
        label: "createHttpTraffic",
        to: "/api/http-traffic/create-http-traffic",
      },
      {
        label: "deleteHttpTraffic",
        to: "/api/http-traffic/delete-http-traffic",
      },
      {
        label: "listHttpTraffics",
        to: "/api/http-traffic/list-http-traffics",
      },
    ],
  },
  {
    label: "HttpTrafficRecord",
    children: [
      {
        label: "Introduction",
        to: "/api/http-traffic-record/introduction",
      },
      {
        label: "composeHttpTrafficRecord",
        to: "/api/http-traffic-record/compose-http-traffic-record",
      },
      {
        label: "listHttpTrafficRecords",
        to: "/api/http-traffic-record/list-http-traffic-records",
      },
    ],
  },
  {
    label: "Pathname",
    children: [
      {
        label: "Introduction",
        to: "/api/pathname/introduction",
      },
      {
        label: "createPathname",
        to: "/api/pathname/create-pathname",
      },
      {
        label: "deletePathname",
        to: "/api/pathname/delete-pathname",
      },
      {
        label: "listPathnames",
        to: "/api/pathname/list-pathnames",
      },
    ],
  },
  {
    label: "Request",
    children: [
      {
        label: "Introduction",
        to: "/api/request/introduction",
      },
      {
        label: "createRequest",
        to: "/api/request/create-request",
      },
    ],
  },
  {
    label: "Response",
    children: [
      {
        label: "Introduction",
        to: "/api/response/introduction",
      },
      {
        label: "createResponse",
        to: "/api/response/create-response",
      },
    ],
  },
  {
    label: "TrafficSource",
    children: [
      {
        label: "Introduction",
        to: "/api/traffic-source/introduction",
      },
      {
        label: "createTrafficSource",
        to: "/api/traffic-source/create-traffic-source",
      },
      {
        label: "deleteTrafficSource",
        to: "/api/traffic-source/delete-traffic-source",
      },
      {
        label: "listTrafficSources",
        to: "/api/traffic-source/list-traffic-sources",
      },
      {
        label: "updateTrafficSource",
        to: "/api/traffic-source/update-traffic-source",
      },
    ],
  },
  {
    label: "User",
    children: [
      {
        label: "Introduction",
        to: "/api/user/introduction",
      },
      {
        label: "authUser",
        to: "/api/user/auth-user",
      },
      {
        label: "updateUser",
        to: "/api/user/update-user",
      },
    ],
  },
  {
    label: "Webhook",
    children: [
      {
        label: "Introduction",
        to: "/api/webhook/introduction",
      },
      {
        label: "createWebhook",
        to: "/api/webhook/create-webhook",
      },
      {
        label: "deleteWebhook",
        to: "/api/webhook/delete-webhook",
      },
      {
        label: "listWebhooks",
        to: "/api/webhook/list-webhooks",
      },
      {
        label: "updateWebhook",
        to: "/api/webhook/update-webhook",
      },
    ],
  },
];

export { API_MENU };
