import type { MenuType } from "./_type";

const SHARED_MENU: MenuType[] = [
  {
    label: "Introduction",
    to: "/shared/introduction",
  },
  {
    label: "Formats",
    children: [
      {
        label: "formatDate",
        to: "/shared/formats/format-date",
      },
      {
        label: "formatJsonObject",
        to: "/shared/formats/format-json-object",
      },
      {
        label: "formatJsonString",
        to: "/shared/formats/format-json-string",
      },
      {
        label: "formatToCapitalizeFirstWordLetter",
        to: "/shared/formats/format-to-capitalize-first-word-letter",
      },
      {
        label: "formatToCep",
        to: "/shared/formats/format-to-cep",
      },
      {
        label: "formatToCnpj",
        to: "/shared/formats/format-to-cnpj",
      },
      {
        label: "formatToCpf",
        to: "/shared/formats/format-to-cpf",
      },
      {
        label: "formatToCurrency",
        to: "/shared/formats/format-to-currency",
      },
      {
        label: "formatToEllipsis",
        to: "/shared/formats/format-to-ellipsis",
      },
      {
        label: "formatToHiddenDigits",
        to: "/shared/formats/format-to-hidden-digits",
      },
      {
        label: "formatToPhone",
        to: "/shared/formats/format-to-phone",
      },
    ],
  },
  {
    label: "Generators",
    children: [
      {
        label: "generateColorByString",
        to: "/shared/generators/generate-color-by-string",
      },
      {
        label: "generateId",
        to: "/shared/generators/generate-id",
      },
      {
        label: "generateSlug",
        to: "/shared/generators/generate-slug",
      },
    ],
  },
  {
    label: "Parsers",
    children: [
      {
        label: "parseLargeFields",
        to: "/shared/parsers/parse-large-fields",
      },
      {
        label: "parseSensitiveData",
        to: "/shared/parsers/parse-sensitive-data",
      },
      {
        label: "parseToDate",
        to: "/shared/parsers/parse-to-date",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "validateDateService",
        to: "/shared/services/validate-date-service",
      },
    ],
  },
  {
    label: "Utilities",
    children: [
      {
        label: "calculateCardInstallment",
        to: "/shared/utilities/calculate-card-installment",
      },
      {
        label: "ensureQuotes",
        to: "/shared/utilities/ensure-quotes",
      },
      {
        label: "isHtml",
        to: "/shared/utilities/is-html",
      },
      {
        label: "removeCurrencySymbols",
        to: "/shared/utilities/remove-currency-symbols",
      },
      {
        label: "removeNonNumeric",
        to: "/shared/utilities/remove-non-numeric",
      },
      {
        label: "stripHtmlTags",
        to: "/shared/utilities/strip-html-tags",
      },
    ],
  },
];

export { SHARED_MENU };
