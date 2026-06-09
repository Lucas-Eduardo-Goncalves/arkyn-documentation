import type { MenuType } from "./_type";

const COMPONENTS_MENU: MenuType[] = [
  { label: "Introduction", to: "/components/introduction" },

  // Components
  {
    label: "Buttons & Actions",
    children: [
      { label: "Badge", to: "/components/components/badge" },
      { label: "Button", to: "/components/components/button" },
      { label: "IconButton", to: "/components/components/icon-button" },
    ],
  },
  {
    label: "Form",
    children: [
      { label: "Checkbox", to: "/components/components/checkbox" },
      { label: "CurrencyInput", to: "/components/components/currency-input" },
      { label: "FileUpload", to: "/components/components/file-upload" },
      { label: "ImageUpload", to: "/components/components/image-upload" },
      { label: "Input", to: "/components/components/input" },
      { label: "MaskedInput", to: "/components/components/masked-input" },
      { label: "MultiSelect", to: "/components/components/multi-select" },
      { label: "PhoneInput", to: "/components/components/phone-input" },
      { label: "RadioBox", to: "/components/components/radio-box" },
      { label: "RadioGroup", to: "/components/components/radio-group" },
      { label: "RichText", to: "/components/components/rich-text" },
      { label: "Select", to: "/components/components/select" },
      { label: "Switch", to: "/components/components/switch" },
      { label: "Textarea", to: "/components/components/textarea" },
    ],
  },
  {
    label: "Fields & Data Display",
    children: [
      { label: "Calendar", to: "/components/components/calendar" },
      { label: "ClientOnly", to: "/components/components/client-only" },
      { label: "Divider", to: "/components/components/divider" },
      { label: "FieldError", to: "/components/components/field-error" },
      { label: "FieldLabel", to: "/components/components/field-label" },
      { label: "FieldWrapper", to: "/components/components/field-wrapper" },
      { label: "TableBody", to: "/components/components/table-body" },
      { label: "TableCaption", to: "/components/components/table-caption" },
      { label: "TableContainer", to: "/components/components/table-container" },
      { label: "TableFooter", to: "/components/components/table-footer" },
      { label: "TableHeader", to: "/components/components/table-header" },
    ],
  },
  {
    label: "Feedback",
    children: [
      { label: "AlertContainer", to: "/components/components/alert-container" },
      { label: "AlertContent", to: "/components/components/alert-content" },
      {
        label: "AlertDescription",
        to: "/components/components/alert-description",
      },
      { label: "AlertIcon", to: "/components/components/alert-icon" },
      { label: "AlertTitle", to: "/components/components/alert-title" },
      { label: "Tooltip", to: "/components/components/tooltip" },
    ],
  },
  {
    label: "Navigation & Tabs",
    children: [
      { label: "CardTabButton", to: "/components/components/card-tab-button" },
      {
        label: "CardTabContainer",
        to: "/components/components/card-tab-container",
      },
      { label: "Pagination", to: "/components/components/pagination" },
      { label: "TabButton", to: "/components/components/tab-button" },
      { label: "TabContainer", to: "/components/components/tab-container" },
    ],
  },
  {
    label: "Overlay",
    children: [
      {
        label: "DrawerContainer",
        to: "/components/components/drawer-container",
      },
      { label: "DrawerHeader", to: "/components/components/drawer-header" },
      {
        label: "ModalContainer",
        to: "/components/components/modal-container",
      },
      { label: "ModalHeader", to: "/components/components/modal-header" },
      { label: "ModalFooter", to: "/components/components/modal-footer" },
      { label: "Popover", to: "/components/components/popover" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "AudioPlayer", to: "/components/components/audio-player" },
      { label: "AudioUpload", to: "/components/components/audio-upload" },
    ],
  },
  {
    label: "Analytics",
    children: [
      { label: "FacebookPixel", to: "/components/components/facebook-pixel" },
      {
        label: "GoogleAnalytics",
        to: "/components/components/google-analytics",
      },
      {
        label: "GoogleTagManager",
        to: "/components/components/google-tag-manager",
      },
    ],
  },

  // Hooks
  {
    label: "Hooks",
    children: [
      { label: "useAutomation", to: "/components/hooks/use-automation" },
      { label: "useDrawer", to: "/components/hooks/use-drawer" },
      { label: "useForm", to: "/components/hooks/use-form" },
      { label: "useHydrated", to: "/components/hooks/use-hydrated" },
      { label: "useModal", to: "/components/hooks/use-modal" },
      { label: "useScopedParams", to: "/components/hooks/use-scoped-params" },
      { label: "useScrollLock", to: "/components/hooks/use-scroll-lock" },
      {
        label: "useSearchAutomation",
        to: "/components/hooks/use-search-automation",
      },
      { label: "useSlider", to: "/components/hooks/use-slider" },
      { label: "useToast", to: "/components/hooks/use-toast" },
    ],
  },

  // Providers
  {
    label: "Providers",
    children: [
      { label: "FormProvider", to: "/components/providers/form-provider" },
      { label: "ModalProvider", to: "/components/providers/modal-provider" },
      { label: "ToastProvider", to: "/components/providers/toast-provider" },
      { label: "DrawerProvider", to: "/components/providers/drawer-provider" },
    ],
  },

  // Services
  {
    label: "Services",
    children: [
      { label: "toHtml", to: "/components/services/to-html" },
      {
        label: "toRichTextValue",
        to: "/components/services/to-rich-text-value",
      },
    ],
  },
];

export { COMPONENTS_MENU };
