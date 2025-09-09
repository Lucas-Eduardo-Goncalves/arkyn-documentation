import { styled } from "@linaria/react";
import { Link } from "react-router";

const ExampleListContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  gap: 16px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;

  svg {
    min-height: 28px;
    min-width: 28px;
    color: rgb(var(--spotlight-primary));
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-heading);
      line-height: 130%;
    }

    p {
      font-size: 14px;
      color: var(--text-body);
      line-height: 130%;
    }
  }

  &:hover {
    background-color: var(--card-foreground-primary);
    border-color: rgb(var(--spotlight-primary));
    cursor: pointer;
  }
`;

export { ExampleListContainer };
