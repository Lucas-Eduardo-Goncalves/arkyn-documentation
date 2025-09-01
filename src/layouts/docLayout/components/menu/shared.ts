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
        label: "formatToCpfCnpj",
        to: "/shared/formats/format-to-cpf-cnpj",
      },
      {
        label: "formatToCurrency",
        to: "/shared/formats/format-to-currency",
      },
      {
        label: "formatToDate",
        to: "/shared/formats/format-to-date",
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
    label: "Services",
    children: [
      {
        label: "calculateCardInstallment",
        to: "/shared/services/calculate-card-installment",
      },
      {
        label: "ensureQuotes",
        to: "/shared/services/ensure-quotes",
      },
      {
        label: "isHtml",
        to: "/shared/services/is-html",
      },
      {
        label: "maskSensitiveData",
        to: "/shared/services/mask-sensitive-data",
      },
      {
        label: "removeCurrencySymbols",
        to: "/shared/services/remove-currency-symbols",
      },
      {
        label: "removeNonNumeric",
        to: "/shared/services/remove-non-numeric",
      },
      {
        label: "stripHtmlTags",
        to: "/shared/services/strip-html-tags",
      },
      {
        label: "truncateLargeFields",
        to: "/shared/services/truncate-large-fields",
      },
    ],
  },
  {
    label: "Validations",
    children: [
      {
        label: "validateCep",
        to: "/shared/validations/validate-cep",
      },
      {
        label: "validateCnpj",
        to: "/shared/validations/validate-cnpj",
      },
      {
        label: "validateCpf",
        to: "/shared/validations/validate-cpf",
      },
      {
        label: "validateDate",
        to: "/shared/validations/validate-date",
      },
      {
        label: "validatePassword",
        to: "/shared/validations/validate-password",
      },
      {
        label: "validatePhone",
        to: "/shared/validations/validate-phone",
      },
      {
        label: "validateRg",
        to: "/shared/validations/validate-rg",
      },
    ],
  },
];

export { SHARED_MENU };
