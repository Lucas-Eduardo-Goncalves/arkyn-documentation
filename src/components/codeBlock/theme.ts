import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    backgroundColor: "var(--card-foreground-primary)",
    color: "var(--text-body)",
    fontWeight: "500",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "var(--text-muted)",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "var(--text-muted)",
      },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["tag", "operator"],
      style: {
        color: "rgb(var(--spotlight-primary))",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(var(--spotlight-warning))",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "rgb(var(--spotlight-success))",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "rgb(var(--spotlight-danger))",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(var(--spotlight-info))",
      },
    },
    {
      types: ["boolean", "string", "entity", "url", "attr-value"],
      style: {
        color: "rgb(var(--spotlight-success))",
      },
    },
    {
      types: [
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
      ],
      style: {
        color: "rgb(var(--spotlight-primary))",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "rgb(var(--spotlight-primary))",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
        color: "rgb(var(--spotlight-danger))",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
        color: "rgb(var(--spotlight-success))",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "rgb(var(--spotlight-warning))",
        fontWeight: "bold",
      },
    },
  ],
};
export { theme };
