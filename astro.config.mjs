import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Arkyn Documentation",
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
          href: "https://github.com/Lucas-Eduardo-Goncalves/arkyn-logs",
        },
      ],
      sidebar: [
        {
          label: "@arkyn/server",
          items: [
            { label: "Introdução", slug: "server/introduction" },
            {
              label: "Instances",
              collapsed: true,
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
            { label: "Introdução", slug: "shared/introduction" },
            {
              label: "Formats",
              collapsed: true,
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
            { label: "Introdução", slug: "templates/introduction" },
            { label: "Países", slug: "templates/countries" },
            { label: "Moedas", slug: "templates/countrycurrencies" },
          ],
        },
      ],
    }),
  ],
});
