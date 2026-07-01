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

  background-color: var(--background);

  &:hover {
    filter: brightness(0.97);
  }

  html.dark &:hover {
    filter: brightness(1.5);
  }

  &.active {
    filter: brightness(0.97);
  }

  html.dark &.active {
    filter: brightness(1.5);
  }
`;

export { SideLinkContainer };
