import { styled } from "@linaria/react";

const SideGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:not(:first-child) {
    margin-top: 24px;
  }

  strong {
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: var(--text-heading);
  }
`;

export { SideGroupContainer };
