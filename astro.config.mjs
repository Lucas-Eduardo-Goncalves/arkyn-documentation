import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Arkyn Documentation",
      logo: {
        replacesTitle: true,
        src: "./src/assets/frame-1.png",
      },
      customCss: ["./src/styles/global.css", "./src/styles/update.css"],
      defaultLocale: "en",
      locales: {
        en: { label: "English" },
        ptbr: { label: "Português" },
      },
      social: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/lucas-eduardo-goncalves",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Lucas-Eduardo-Goncalves",
        },
      ],
      sidebar: [
        {
          label: "@arkyn/server",
          items: [
            {
              label: "Introdução",
              slug: "server/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Instances",
              collapsed: true,
              translations: { ptbr: "Instâncias", en: "Instances" },
              items: [
                { label: "ApiInstance", slug: "server/instances/apiinstance" },
                {
                  label: "ArkynLogInstance",
                  slug: "server/instances/arkynloginstance",
                },
              ],
            },
            {
              label: "Bad responses",
              collapsed: true,
              translations: { ptbr: "Respostas de erro", en: "Bad responses" },
              items: [
                {
                  label: "BadGateway",
                  slug: "server/badresponses/badgateway",
                },
                {
                  label: "BadRequest",
                  slug: "server/badresponses/badrequest",
                },
                { label: "Conflict", slug: "server/badresponses/conflict" },
                { label: "Forbidden", slug: "server/badresponses/forbidden" },
                { label: "NotFound", slug: "server/badresponses/notfound" },
                {
                  label: "NotImplemented",
                  slug: "server/badresponses/notimplemented",
                },
                {
                  label: "ServerError",
                  slug: "server/badresponses/servererror",
                },
                {
                  label: "Unauthorized",
                  slug: "server/badresponses/unauthorized",
                },
                {
                  label: "UnprocessableEntity",
                  slug: "server/badresponses/unprocessableentity",
                },
              ],
            },
            {
              label: "Success responses",
              collapsed: true,
              translations: {
                ptbr: "Respostas de sucesso",
                en: "Success responses",
              },
              items: [
                { label: "Created", slug: "server/successresponses/created" },
                { label: "Found", slug: "server/successresponses/found" },
                {
                  label: "NoContent",
                  slug: "server/successresponses/nocontent",
                },
                { label: "Success", slug: "server/successresponses/success" },
                { label: "Updated", slug: "server/successresponses/updated" },
              ],
            },
            {
              label: "Services",
              collapsed: true,
              translations: { ptbr: "Serviços", en: "Services" },
              items: [
                {
                  label: "decodeErrorMessageFromRequest",
                  slug: "server/services/decodeerrormessagefromrequest",
                },
                {
                  label: "decodeRequestBody",
                  slug: "server/services/decoderequestbody",
                },
                { label: "errorHandler", slug: "server/services/errorhandler" },
                { label: "formParse", slug: "server/services/formparse" },
                { label: "getCaller", slug: "server/services/getcaller" },
                {
                  label: "getScopedParams",
                  slug: "server/services/getscopedparams",
                },
                { label: "httpDebug", slug: "server/services/httpdebug" },
                {
                  label: "SchemaValidator",
                  slug: "server/services/schemavalidator",
                },
              ],
            },
          ],
        },
        {
          label: "@arkyn/shared",
          items: [
            {
              label: "Introdução",
              slug: "shared/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Formats",
              collapsed: true,
              translations: { ptbr: "Formatadores", en: "Formats" },
              items: [
                { label: "formatDate", slug: "shared/formats/formatdate" },
                {
                  label: "formatJsonObject",
                  slug: "shared/formats/formatjsonobject",
                },
                {
                  label: "formatJsonString",
                  slug: "shared/formats/formatjsonstring",
                },
                { label: "formatToCep", slug: "shared/formats/formattocep" },
                { label: "formatToCnpj", slug: "shared/formats/formattocnpj" },
                { label: "formatToCpf", slug: "shared/formats/formattocpf" },
                {
                  label: "formatToCpfCnpj",
                  slug: "shared/formats/formattocpfcnpj",
                },
                {
                  label: "formatToCurrency",
                  slug: "shared/formats/formattocurrency",
                },
                { label: "formatToDate", slug: "shared/formats/formattodate" },
                {
                  label: "formatToEllipsis",
                  slug: "shared/formats/formattoellipsis",
                },
                {
                  label: "formatToHiddenDigits",
                  slug: "shared/formats/formattohiddendigits",
                },
                {
                  label: "formatToPhone",
                  slug: "shared/formats/formattophone",
                },
              ],
            },
            {
              label: "Generates",
              collapsed: true,
              translations: { ptbr: "Geradores", en: "Generates" },
              items: [
                {
                  label: "generateColorByString",
                  slug: "shared/generates/generatecolorbystring",
                },
                { label: "generateId", slug: "shared/generates/generateid" },
                {
                  label: "generateSlug",
                  slug: "shared/generates/generateslug",
                },
              ],
            },
            {
              label: "Services",
              collapsed: true,
              translations: { ptbr: "Serviços", en: "Services" },
              items: [
                {
                  label: "calculateCardInstallment",
                  slug: "shared/services/calculatecardinstallment",
                },
                { label: "ensureQuotes", slug: "shared/services/ensurequotes" },
                {
                  label: "maskSensitiveData",
                  slug: "shared/services/masksensitivedata",
                },
                {
                  label: "removeCurrencySymbols",
                  slug: "shared/services/removecurrencysymbols",
                },
                {
                  label: "removeNonNumeric",
                  slug: "shared/services/removenonnumeric",
                },
                {
                  label: "stripHtmlTags",
                  slug: "shared/services/striphtmltags",
                },
                {
                  label: "truncateLargeFields",
                  slug: "shared/services/truncatelargefields",
                },
              ],
            },
            {
              label: "Validations",
              collapsed: true,
              translations: { ptbr: "Validações", en: "Validations" },
              items: [
                {
                  label: "validateCep",
                  slug: "shared/validations/validatecep",
                },
                {
                  label: "validateCnpj",
                  slug: "shared/validations/validatecnpj",
                },
                {
                  label: "validateCpf",
                  slug: "shared/validations/validatecpf",
                },
                {
                  label: "validateDate",
                  slug: "shared/validations/validatedate",
                },
                {
                  label: "validatePassword",
                  slug: "shared/validations/validatepassword",
                },
                {
                  label: "validatePhone",
                  slug: "shared/validations/validatephone",
                },
                { label: "validateRg", slug: "shared/validations/validaterg" },
              ],
            },
          ],
        },
        {
          label: "@arkyn/templates",
          items: [
            {
              label: "Introdução",
              slug: "templates/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "Países",
              slug: "templates/countries",
              translations: { ptbr: "Países", en: "Countries" },
            },
            {
              label: "Estados brasileiros",
              slug: "templates/brazilianstates",
              translations: {
                ptbr: "Estados brasileiros",
                en: "Brazilian States",
              },
            },
            {
              label: "Moedas",
              slug: "templates/countrycurrencies",
              translations: { ptbr: "Moedas", en: "Currencies" },
            },
          ],
        },
        {
          label: "@arkyn/api-logs",
          items: [
            {
              label: "Introdução",
              slug: "api/introduction",
              translations: { ptbr: "Introdução", en: "Introduction" },
            },
            {
              label: "TrafficSource",
              collapsed: true,
              translations: { ptbr: "TrafficSource", en: "TrafficSource" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/trafficsource/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar TrafficSource",
                  slug: "api/trafficsource/createtrafficsource",
                  translations: {
                    ptbr: "Criar TrafficSource",
                    en: "Create TrafficSource",
                  },
                },
                {
                  label: "Atualizar TrafficSource",
                  slug: "api/trafficsource/updatetrafficsource",
                  translations: {
                    ptbr: "Atualizar TrafficSource",
                    en: "Update TrafficSource",
                  },
                },
                {
                  label: "Deletar TrafficSource",
                  slug: "api/trafficsource/deletetrafficsource",
                  translations: {
                    ptbr: "Deletar TrafficSource",
                    en: "Delete TrafficSource",
                  },
                },
                {
                  label: "Listar TrafficSources",
                  slug: "api/trafficsource/listtrafficsources",
                  translations: {
                    ptbr: "Listar TrafficSources",
                    en: "List TrafficSources",
                  },
                },
              ],
            },
            {
              label: "CoreLog",
              collapsed: true,
              translations: { ptbr: "CoreLog", en: "CoreLog" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/corelog/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar CoreLog",
                  slug: "api/corelog/createcorelog",
                  translations: { ptbr: "Criar CoreLog", en: "Create CoreLog" },
                },
                {
                  label: "Listar CoreLogs",
                  slug: "api/corelog/listcorelogs",
                  translations: {
                    ptbr: "Listar CoreLogs",
                    en: "List CoreLogs",
                  },
                },
              ],
            },
            {
              label: "CorePathname",
              collapsed: true,
              translations: { ptbr: "CorePathname", en: "CorePathname" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/corepathname/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar CorePathname",
                  slug: "api/corepathname/createcorepathname",
                  translations: {
                    ptbr: "Criar CorePathname",
                    en: "Create CorePathname",
                  },
                },
                {
                  label: "Deletar CorePathname",
                  slug: "api/corepathname/deletecorepathname",
                  translations: {
                    ptbr: "Deletar CorePathname",
                    en: "Delete CorePathname",
                  },
                },
                {
                  label: "Listar CorePathnames",
                  slug: "api/corepathname/listcorepathnames",
                  translations: {
                    ptbr: "Listar CorePathnames",
                    en: "List CorePathnames",
                  },
                },
              ],
            },
            {
              label: "HttpTraffic",
              collapsed: true,
              translations: { ptbr: "HttpTraffic", en: "HttpTraffic" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/httptraffic/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar HttpTraffic",
                  slug: "api/httptraffic/createhttptraffic",
                  translations: {
                    ptbr: "Criar HttpTraffic",
                    en: "Create HttpTraffic",
                  },
                },
                {
                  label: "Deletar HttpTraffic",
                  slug: "api/httptraffic/deletehttptraffic",
                  translations: {
                    ptbr: "Deletar HttpTraffic",
                    en: "Delete HttpTraffic",
                  },
                },
                {
                  label: "Listar HttpTraffics",
                  slug: "api/httptraffic/listhttptraffics",
                  translations: {
                    ptbr: "Listar HttpTraffics",
                    en: "List HttpTraffics",
                  },
                },
              ],
            },
            {
              label: "Domain",
              collapsed: true,
              translations: { ptbr: "Domain", en: "Domain" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/domain/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar Domain",
                  slug: "api/domain/createdomain",
                  translations: { ptbr: "Criar Domain", en: "Create Domain" },
                },
                {
                  label: "Deletar Domain",
                  slug: "api/domain/deletedomain",
                  translations: { ptbr: "Deletar Domain", en: "Delete Domain" },
                },
                {
                  label: "Listar Domains",
                  slug: "api/domain/listdomains",
                  translations: { ptbr: "Listar Domains", en: "List Domains" },
                },
              ],
            },
            {
              label: "Pathname",
              collapsed: true,
              translations: { ptbr: "Pathname", en: "Pathname" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/pathname/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar Pathname",
                  slug: "api/pathname/createpathname",
                  translations: {
                    ptbr: "Criar Pathname",
                    en: "Create Pathname",
                  },
                },
                {
                  label: "Deletar Pathname",
                  slug: "api/pathname/deletepathname",
                  translations: {
                    ptbr: "Deletar Pathname",
                    en: "Delete Pathname",
                  },
                },
                {
                  label: "Listar Pathnames",
                  slug: "api/pathname/listpathnames",
                  translations: {
                    ptbr: "Listar Pathnames",
                    en: "List Pathnames",
                  },
                },
              ],
            },
            {
              label: "Request",
              collapsed: true,
              translations: { ptbr: "Request", en: "Request" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/request/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar Request",
                  slug: "api/request/createrequest",
                  translations: { ptbr: "Criar Request", en: "Create Request" },
                },
              ],
            },
            {
              label: "Response",
              collapsed: true,
              translations: { ptbr: "Response", en: "Response" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/response/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar Response",
                  slug: "api/response/createresponse",
                  translations: {
                    ptbr: "Criar Response",
                    en: "Create Response",
                  },
                },
              ],
            },
            {
              label: "HttpTrafficRecord",
              collapsed: true,
              translations: {
                ptbr: "HttpTrafficRecord",
                en: "HttpTrafficRecord",
              },
              items: [
                {
                  label: "Introdução",
                  slug: "api/httptrafficrecord/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Compor HttpTrafficRecord",
                  slug: "api/httptrafficrecord/composehttptrafficrecord",
                  translations: {
                    ptbr: "Compor HttpTrafficRecord",
                    en: "Compose HttpTrafficRecord",
                  },
                },
                {
                  label: "Listar HttpTrafficRecords",
                  slug: "api/httptrafficrecord/listhttptrafficrecords",
                  translations: {
                    ptbr: "Listar HttpTrafficRecords",
                    en: "List HttpTrafficRecords",
                  },
                },
              ],
            },
            {
              label: "Webhook",
              collapsed: true,
              translations: { ptbr: "Webhook", en: "Webhook" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/webhook/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Criar Webhook",
                  slug: "api/webhook/createwebhook",
                  translations: { ptbr: "Criar Webhook", en: "Create Webhook" },
                },
                {
                  label: "Deletar Webhook",
                  slug: "api/webhook/deletewebhook",
                  translations: {
                    ptbr: "Deletar Webhook",
                    en: "Delete Webhook",
                  },
                },
                {
                  label: "Update Webhook",
                  slug: "api/webhook/updatewebhook",
                  translations: {
                    ptbr: "Atualizar Webhook",
                    en: "Update Webhook",
                  },
                },
                {
                  label: "Listar Webhook",
                  slug: "api/webhook/listwebhooks",
                  translations: { ptbr: "Listar Webhook", en: "List Webhook" },
                },
              ],
            },
            {
              label: "User",
              collapsed: true,
              translations: { ptbr: "User", en: "User" },
              items: [
                {
                  label: "Introdução",
                  slug: "api/user/introduction",
                  translations: { ptbr: "Introdução", en: "Introduction" },
                },
                {
                  label: "Autenticar User",
                  slug: "api/user/authuser",
                  translations: {
                    ptbr: "Autenticar User",
                    en: "Authenticate User",
                  },
                },
                {
                  label: "Atualizar User",
                  slug: "api/user/updateuser",
                  translations: { ptbr: "Atualizar User", en: "Update User" },
                },
              ],
            },
          ],
        },

        {
          label: "Guias",
          translations: {
            ptbr: "Guias",
            en: "Guides",
          },
          items: [
            {
              label: "Hot to configure Webhook",
              slug: "guides/howtoconfigurediscordwebhook",
              translations: {
                ptbr: "Como configurar o webhook do Discord",
                en: "How to configure Discord webhook",
              },
            },
          ],
        },
      ],
    }),
  ],
});
