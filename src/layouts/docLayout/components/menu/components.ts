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
      { label: "Radio", to: "/components/components/radio" },
      { label: "RichText", to: "/components/components/rich-text" },
      { label: "Select", to: "/components/components/select" },
      { label: "Switch", to: "/components/components/switch" },
      { label: "Textarea", to: "/components/components/textarea" },
    ],
  },
  {
    label: "Calendar",
    children: [
      { label: "Calendar", to: "/components/components/calendar" },
      { label: "FullCalendar", to: "/components/components/full-calendar" },
    ],
  },
  {
    label: "Fields & Data Display",
    children: [
      { label: "ClientOnly", to: "/components/components/client-only" },
      { label: "Divider", to: "/components/components/divider" },
      { label: "Field", to: "/components/components/field" },
      { label: "Table", to: "/components/components/table" },
    ],
  },
  {
    label: "Feedback",
    children: [
      { label: "Alert", to: "/components/components/alert" },
      { label: "Tooltip", to: "/components/components/tooltip" },
    ],
  },
  {
    label: "Navigation & Tabs",
    children: [
      { label: "CardTab", to: "/components/components/card-tab" },
      { label: "Pagination", to: "/components/components/pagination" },
      { label: "Tab", to: "/components/components/tab" },
    ],
  },
  {
    label: "Overlay",
    children: [
      { label: "Drawer", to: "/components/components/drawer" },
      { label: "Modal", to: "/components/components/modal" },
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
