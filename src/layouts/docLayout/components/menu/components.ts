import type { MenuType } from "./_type";

const COMPONENTS_MENU: MenuType[] = [
  {
    label: "Concepts",
    children: [],
  },
  {
    label: "Layout",
    children: [
      {
        label: "Divider",
        to: "/components/layout/divider",
      },
    ],
  },
  {
    label: "Buttons",
    children: [
      {
        label: "Button",
        to: "/components/buttons/button",
      },
      {
        label: "IconButton",
        to: "/components/buttons/icon-button",
      },
    ],
  },
  {
    label: "Form",
    children: [
      {
        label: "Input",
        to: "/components/form/input",
      },
      {
        label: "MaskedInput",
        to: "/components/form/masked-input",
      },
      {
        label: "CurrencyInput",
        to: "/components/form/currency-input",
      },
      {
        label: "PhoneInput",
        to: "/components/form/phone-input",
      },
      {
        label: "Textarea",
        to: "/components/form/textarea",
      },
      {
        label: "Checkbox",
        to: "/components/form/checkbox",
      },
      {
        label: "RadioGroup",
        to: "/components/form/radiogroup",
      },
      {
        label: "RadioBox",
        to: "/components/form/radiobox",
      },
      {
        label: "Switch",
        to: "/components/form/switch",
      },
      {
        label: "MultiSelect",
        to: "/components/form/multiselect",
      },
      {
        label: "Slider",
        to: "/components/form/slider",
      },
      {
        label: "FieldLabel",
        to: "/components/form/field-label",
      },
      {
        label: "FieldError",
        to: "/components/form/field-error",
      },
      {
        label: "FieldWrapper",
        to: "/components/form/field-wrapper",
      },
      {
        label: "FileUpload",
        to: "/components/form/file-upload",
      },
      {
        label: "ImageUpload",
        to: "/components/form/image-upload",
      },
      {
        label: "AudioUpload",
        to: "/components/form/audio-upload",
      },
    ],
  },
  {
    label: "Collections",
    children: [
      {
        label: "Tab",
        to: "/components/collections/tab",
      },
      {
        label: "CardTab",
        to: "/components/collections/card-tab",
      },
    ],
  },
  {
    label: "Overlays",
    children: [
      {
        label: "Modal",
        to: "/components/overlays/modal",
      },
      {
        label: "Drawer",
        to: "/components/overlays/drawer",
      },
      {
        label: "Popover",
        to: "/components/overlays/popover",
      },
      {
        label: "Tooltip",
        to: "/components/overlays/tooltip",
      },
    ],
  },
  {
    label: "Feedback",
    children: [
      {
        label: "Alert",
        to: "/components/feedback/alert",
      },
      {
        label: "Badge",
        to: "/components/feedback/badge",
      },
    ],
  },
  {
    label: "Data display",
    children: [
      {
        label: "Table",
        to: "/components/data-display/table",
      },
    ],
  },
  {
    label: "Disclosure",
    children: [],
  },
  {
    label: "Utilities",
    children: [
      {
        label: "AudioPlayer",
        to: "/components/utilities/audio-player",
      },
      {
        label: "ClientOnly",
        to: "/components/concepts/client-only",
      },
    ],
  },
];

export { COMPONENTS_MENU };
