import { styled } from "@linaria/react";
import { Link } from "react-router";

const GuideLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;

  color: var(--text-body);
  font-size: 14px;
  font-weight: 500;

  svg {
    height: 16px;
    width: 16px;
    color: var(--text-body);
  }

  &:hover {
    color: rgb(var(--spotlight-primary));
    svg {
      color: rgb(var(--spotlight-primary));
    }
  }
`;

export { GuideLinkContainer };
