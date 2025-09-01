import { styled } from "@linaria/react";
import { Link } from "react-router";

const SideLinkContainer = styled(Link)`
  display: block;
  padding: 8px 14px;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-body);

  &:hover {
    background: var(--background);
  }

  &.active {
    background: rgba(var(--spotlight-primary), 0.1);
    color: rgb(var(--spotlight-primary));
  }
`;

export { SideLinkContainer };
