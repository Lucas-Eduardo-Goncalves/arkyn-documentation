import { styled } from "@linaria/react";

const Container = styled.div`
  margin-left: auto;

  width: 100%;
  min-width: 274px;
  max-width: 274px;

  .searchButton {
    min-width: 274px;
  }

  .searchButton,
  .DocSearch-Button {
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 240px;
    min-height: 38px;
    max-height: 38px;

    padding: 0 16px;
    gap: 8px;
    border-radius: 8px;

    border: 1px solid var(--border);
    outline: 1px solid transparent;

    background: var(--background-foreground);
    color: var(--text-heading);

    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
  }

  .searchButton:hover,
  .DocSearch-Button:hover {
    cursor: text;
    border-color: rgb(var(--spotlight-primary));
    outline-color: rgb(var(--spotlight-primary));

    /* transition:
      border-color 0.16s ease,
      outline-color 0.16s ease,
      color 0.16s ease,
      background-color 0.16s ease; */
  }

  .searchButton:focus-visible,
  .DocSearch-Button:focus-visible {
    border-color: rgb(var(--spotlight-primary));
    outline-color: rgb(var(--spotlight-primary));
  }

  .searchButton:disabled {
    user-select: none;
    opacity: 0.5;
  }

  .searchButton svg,
  .DocSearch-Search-Icon,
  .DocSearch-Button-Container svg {
    color: var(--text-muted);
    stroke: currentColor;
  }

  .searchButton span,
  .DocSearch-Button-Placeholder {
    color: var(--text-muted);
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin: 0;
  }

  .searchButton kbd,
  .DocSearch-Button-Keys {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .searchButton kbd,
  .DocSearch-Button-Key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--input-background);
    color: var(--text-body);
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    transition: none !important;
    box-shadow: none;
  }

  .searchButton kbd + kbd {
    margin-left: 0;
  }

  .DocSearch-Button-Key:first-child {
    margin-right: 0;
  }
`;

export { Container };
