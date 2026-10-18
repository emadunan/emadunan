export type PropDoc = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export type DemoDoc = {
  /** File name (without .tsx) in ./demos */
  id: string;
  title: string;
  description?: string;
};

export type ComponentDoc = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  demos: DemoDoc[];
  props: PropDoc[];
  /** Extra props spread onto the underlying element, e.g. "<button>" */
  extends?: string;
  /** Sub-components such as Select.Option */
  subcomponents?: { name: string; description: string; props: PropDoc[] }[];
  notes?: string[];
};

export const categories = [
  "Form",
  "Navigation",
  "Layout",
  "Feedback",
  "Overlay",
] as const;

export type Category = (typeof categories)[number];

const sizeProp: PropDoc = {
  name: "size",
  type: '"sm" | "md" | "lg"',
  default: '"md"',
  description: "Control height, padding and font size.",
};

const labelProp: PropDoc = {
  name: "label",
  type: "string",
  description: "Text rendered in a <label> above the field.",
};

const errorProp: PropDoc = {
  name: "error",
  type: "string",
  description: "Error message shown below the field; also applies error styling.",
};

export const componentDocs: ComponentDoc[] = [
  /* ---------------- Form ---------------- */
  {
    slug: "button",
    name: "Button",
    category: "Form",
    description: "A button with six colour variants and three sizes.",
    demos: [
      { id: "ButtonVariants", title: "Variants" },
      { id: "ButtonSizes", title: "Sizes" },
      { id: "ButtonDisabled", title: "Disabled" },
    ],
    props: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "info"',
        default: '"primary"',
        description: "Colour scheme of the button.",
      },
      sizeProp,
      {
        name: "children",
        type: "ReactNode",
        default: '"Submit"',
        description: 'Button content. Falls back to the text "Submit" when empty.',
      },
    ],
    extends: "<button>",
    notes: [
      'No default type is set, so inside a <form> a Button submits it. Pass type="button" for actions that should not submit.',
    ],
  },
  {
    slug: "input",
    name: "Input",
    category: "Form",
    description: "A text input with an optional label, error message and size.",
    demos: [
      { id: "InputBasic", title: "Basic" },
      { id: "InputStates", title: "Error and disabled" },
      {
        id: "InputNumber",
        title: "Number input",
        description:
          "By default, scrolling the mouse wheel over a focused number input blurs it instead of changing the value. Set allowWheelChange to keep the browser behaviour.",
      },
    ],
    props: [
      labelProp,
      errorProp,
      sizeProp,
      {
        name: "allowWheelChange",
        type: "boolean",
        default: "false",
        description:
          'For type="number": allow the mouse wheel to change the value while focused.',
      },
      {
        name: "className",
        type: "string",
        description: "Applied to the <input> element, not the wrapper.",
      },
    ],
    extends: "<input>",
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "Form",
    description: "A multi-line text field with label and error support.",
    demos: [{ id: "TextareaBasic", title: "Basic" }],
    props: [
      labelProp,
      errorProp,
      sizeProp,
      {
        name: "className",
        type: "string",
        description: "Applied to the <textarea> element.",
      },
    ],
    extends: "<textarea>",
  },
  {
    slug: "select",
    name: "Select",
    category: "Form",
    description: "A styled native <select>, with Select.Option for its options.",
    demos: [{ id: "SelectBasic", title: "Basic" }],
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Select.Option elements (or plain <option>/<optgroup>).",
      },
      labelProp,
      errorProp,
      sizeProp,
      {
        name: "className",
        type: "string",
        description: "Applied to the <select> element.",
      },
    ],
    extends: "<select>",
    subcomponents: [
      {
        name: "Select.Option",
        description: "A thin wrapper over <option>; accepts every <option> attribute.",
        props: [
          {
            name: "children",
            type: "ReactNode",
            required: true,
            description: "Option text.",
          },
        ],
      },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "Form",
    description: "A checkbox wrapped in its own label.",
    demos: [{ id: "CheckboxBasic", title: "Basic" }],
    props: [
      labelProp,
      errorProp,
      sizeProp,
      {
        name: "className",
        type: "string",
        description: "Applied to the wrapping <label>.",
      },
    ],
    extends: "<input type=\"checkbox\">",
  },
  {
    slug: "radio-group",
    name: "RadioGroup",
    category: "Form",
    description: "A controlled group of radio buttons inside a fieldset.",
    demos: [{ id: "RadioGroupBasic", title: "Basic" }],
    props: [
      {
        name: "name",
        type: "string",
        required: true,
        description: "Shared name attribute of the radio inputs.",
      },
      {
        name: "options",
        type: "{ value: string; label: string }[]",
        required: true,
        description: "The choices to render.",
      },
      {
        name: "value",
        type: "string",
        required: true,
        description: "The selected option value.",
      },
      {
        name: "onChange",
        type: "(value: string) => void",
        required: true,
        description: "Called with the newly selected value.",
      },
      {
        name: "legend",
        type: "string",
        description: "Caption rendered in the fieldset's <legend>.",
      },
    ],
  },
  {
    slug: "autocomplete-input",
    name: "AutocompleteInput",
    category: "Form",
    description:
      "A combobox that fetches suggestions as you type, with debouncing, keyboard navigation and ARIA support.",
    demos: [
      { id: "AutocompleteBasic", title: "Async suggestions" },
      {
        id: "AutocompleteCustom",
        title: "Custom rendering",
        description:
          "Use renderSuggestion to show richer items while getSuggestionLabel controls the text written into the input.",
      },
    ],
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        description: "The current input text (controlled).",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        required: true,
        description: "Called while typing and when a suggestion is chosen.",
      },
      {
        name: "fetchSuggestions",
        type: "(query: string) => Promise<T[]>",
        required: true,
        description:
          "Loads suggestions for the trimmed query. Results of stale requests are discarded.",
      },
      {
        name: "getSuggestionKey",
        type: "(suggestion: T) => React.Key",
        required: true,
        description: "Unique key for each suggestion.",
      },
      {
        name: "getSuggestionLabel",
        type: "(suggestion: T) => string",
        required: true,
        description: "Text written into the input when a suggestion is selected.",
      },
      {
        name: "onSelect",
        type: "(suggestion: T) => void",
        required: true,
        description: "Called with the chosen suggestion.",
      },
      {
        name: "renderSuggestion",
        type: "(suggestion: T) => ReactNode",
        default: "getSuggestionLabel",
        description: "Custom rendering of each item in the list.",
      },
      {
        name: "debounceMs",
        type: "number",
        default: "300",
        description: "Delay after the last keystroke before fetching.",
      },
      {
        name: "minimumQueryLength",
        type: "number",
        default: "1",
        description: "Minimum trimmed length before suggestions are fetched.",
      },
      {
        name: "loadingMessage",
        type: "ReactNode",
        default: '"جار البحث..."',
        description: "Shown while a request is in flight.",
      },
      {
        name: "emptyMessage",
        type: "ReactNode",
        default: '"لا توجد نتائج"',
        description: "Shown when a request returns no results.",
      },
      labelProp,
      errorProp,
      sizeProp,
    ],
    extends: "<input>",
    notes: [
      "fetchSuggestions is an effect dependency. Define it outside the component or wrap it in useCallback; an inline function is re-created every render and keeps triggering new requests.",
      "The default loading and empty messages are in Arabic. Pass loadingMessage and emptyMessage for other languages.",
      "Keyboard: ↑/↓ move through suggestions, Enter selects, Escape closes the list.",
    ],
  },

  /* ---------------- Navigation ---------------- */
  {
    slug: "navbar",
    name: "Navbar",
    category: "Navigation",
    description: "A horizontal <nav>. Each child is wrapped in its own <li>.",
    demos: [{ id: "NavbarBasic", title: "Basic" }],
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Links or other items; each becomes a list item.",
      },
    ],
    extends: "<nav>",
    notes: [
      'The package\'s base styles highlight a link with class "active" inside a list item, using --color-brand-active.',
    ],
  },
  {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    category: "Navigation",
    description:
      "A button that toggles a menu. It closes on outside click, on Escape (returning focus to the trigger), and, by default, when an item is selected.",
    demos: [{ id: "DropdownMenuBasic", title: "Basic" }],
    props: [
      {
        name: "trigger",
        type: "ReactNode",
        required: true,
        description: "Content of the toggle button.",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "DropdownMenu.Item and DropdownMenu.Separator elements.",
      },
    ],
    extends: "<div>",
    subcomponents: [
      {
        name: "DropdownMenu.Item",
        description: "A menu entry rendered as a button.",
        props: [
          {
            name: "onClick",
            type: "MouseEventHandler<HTMLButtonElement>",
            required: true,
            description: "Called when the item is clicked.",
          },
          {
            name: "closeOnSelect",
            type: "boolean",
            default: "true",
            description: "Close the menu after the item is clicked.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: true,
            description: "Item content.",
          },
        ],
      },
      {
        name: "DropdownMenu.Separator",
        description: "A horizontal divider between groups of items. Takes no props.",
        props: [],
      },
    ],
  },
  {
    slug: "pagination",
    name: "Pagination",
    category: "Navigation",
    description:
      "Page navigation with first/previous/next/last buttons and ellipses for long ranges.",
    demos: [
      { id: "PaginationClassic", title: "Classic variant" },
      { id: "PaginationModern", title: "Modern variant" },
      {
        id: "PaginationLabels",
        title: "Custom labels",
        description: "Override the accessible labels, for example to localise them.",
      },
    ],
    props: [
      {
        name: "total",
        type: "number",
        required: true,
        description: "Total number of items.",
      },
      {
        name: "pageSize",
        type: "number",
        required: true,
        description: "Items per page.",
      },
      {
        name: "currentPage",
        type: "number",
        required: true,
        description: "The active page, 1-based. Clamped to the valid range.",
      },
      {
        name: "onChange",
        type: "(page: number) => void",
        required: true,
        description: "Called with the new page; never called for the current page.",
      },
      {
        name: "siblingCount",
        type: "number",
        default: "1",
        description: "Pages shown on each side of the current page.",
      },
      {
        name: "variant",
        type: '"classic" | "modern"',
        default: '"classic"',
        description: "Visual style.",
      },
      {
        name: "labels",
        type: "{ navigation?, first?, prev?, next?, last?: string; page?: (page: number) => string }",
        description: "Accessible labels. Defaults are English.",
      },
      {
        name: "className",
        type: "string",
        description: "Applied to the root <nav>.",
      },
    ],
    notes: ["Nothing is rendered when there is only one page or none."],
  },

  /* ---------------- Layout ---------------- */
  {
    slug: "app-header",
    name: "AppHeader",
    category: "Layout",
    description:
      "A responsive application header with a logo, title, navigation, actions and a theme toggle. On small screens the navigation moves into a slide-in drawer. It adapts to right-to-left layouts.",
    demos: [
      {
        id: "AppHeaderBasic",
        title: "Basic",
        description:
          "Make the window narrower to see the menu button and drawer. The theme toggle is hidden here because the site has its own.",
      },
    ],
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Navigation items; each is wrapped in an <li>.",
      },
      { name: "title", type: "string", description: "Heading next to the logo." },
      {
        name: "logo",
        type: "ReactNode",
        description: "Custom logo element. Takes precedence over logoSrc.",
      },
      { name: "logoSrc", type: "string", description: "Image URL for a default logo." },
      { name: "logoAlt", type: "string", default: '""', description: "Alt text for the logo." },
      { name: "logoHref", type: "string", description: "Wraps the logo in a link." },
      { name: "actions", type: "ReactNode", description: "Content on the end side, after the theme toggle." },
      { name: "navLabel", type: "string", default: '"Primary navigation"', description: "aria-label of the nav elements." },
      { name: "menuLabel", type: "string", default: '"Menu"', description: "aria-label of the drawer toggle." },
      { name: "showThemeToggle", type: "boolean", default: "true", description: "Show the light/dark toggle button." },
      { name: "sticky", type: "boolean", default: "false", description: "Stick the header to the top on scroll." },
      {
        name: "theme",
        type: '"light" | "dark"',
        description: "Controlled theme. Leave undefined to let the header manage it.",
      },
      {
        name: "onThemeChange",
        type: "(theme: ThemeMode) => void",
        description: "Called when the toggle is pressed.",
      },
    ],
    extends: "<header>",
    notes: [
      'The header writes the active theme to <html data-theme="…">. When uncontrolled it also saves it in localStorage under "theme" and starts from that value, or from prefers-color-scheme.',
      "The drawer is positioned below --app-header-height (falling back to --header-height, then 4rem).",
    ],
  },
  {
    slug: "header",
    name: "Header",
    category: "Layout",
    description: "A simple header bar with logo, title, navigation and actions slots.",
    demos: [{ id: "HeaderBasic", title: "Basic" }],
    props: [
      { name: "logo", type: "ReactNode", required: true, description: "Logo element, usually <Logo>." },
      { name: "nav", type: "ReactNode", required: true, description: "Navigation, usually <Navbar>." },
      { name: "actions", type: "ReactNode", required: true, description: "Content at the end of the bar." },
      { name: "title", type: "string", description: "Heading next to the logo." },
    ],
    extends: "<header>",
  },
  {
    slug: "logo",
    name: "Logo",
    category: "Layout",
    description: "A <figure> wrapper that sizes a logo image for headers.",
    demos: [{ id: "LogoBasic", title: "Basic" }],
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Usually an <img>." },
    ],
    extends: "<figure>",
  },
  {
    slug: "layout",
    name: "Layout, Main & Footer",
    category: "Layout",
    description:
      "Structural wrappers for a page shell. Layout is a full-height <div>, Main is a <main>, and Footer is a <footer>.",
    demos: [{ id: "LayoutBasic", title: "Page shell" }],
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Content. Optional on Main.",
      },
    ],
    extends: "<div> / <main> / <footer>",
  },

  /* ---------------- Feedback ---------------- */
  {
    slug: "spinner",
    name: "Spinner",
    category: "Feedback",
    description: 'An accessible loading indicator (role="status").',
    demos: [{ id: "SpinnerBasic", title: "Sizes and colours" }],
    props: [
      sizeProp,
      { name: "color", type: "string", description: "Colour of the spinning arc." },
      { name: "className", type: "string", description: "Additional class name." },
    ],
  },

  /* ---------------- Overlay ---------------- */
  {
    slug: "modal",
    name: "Modal",
    category: "Overlay",
    description:
      "A centred dialog over a backdrop. Closes on Escape or a backdrop click, and locks page scroll while open.",
    demos: [{ id: "ModalBasic", title: "Basic" }],
    props: [
      { name: "isOpen", type: "boolean", required: true, description: "Whether the modal is shown." },
      { name: "onClose", type: "() => void", required: true, description: "Called on Escape or backdrop click." },
      { name: "children", type: "ReactNode", description: "Dialog content." },
    ],
    extends: "<div>",
    notes: [
      "The modal is rendered in place, not in a portal. Avoid ancestors with transform or filter, because they change how position: fixed is resolved.",
    ],
  },
  {
    slug: "backdrop",
    name: "Backdrop",
    category: "Overlay",
    description: "A full-screen dimmed, blurred layer. Used by Modal, and available for custom overlays.",
    demos: [{ id: "BackdropBasic", title: "Basic" }],
    props: [{ name: "onClick", type: "() => void", description: "Called when the backdrop is clicked." }],
    extends: "<div>",
    notes: ["Uses --color-overlay, or rgba(0, 0, 0, 0.5) when that token is not set."],
  },
];

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentDocs.find((doc) => doc.slug === slug);
}
