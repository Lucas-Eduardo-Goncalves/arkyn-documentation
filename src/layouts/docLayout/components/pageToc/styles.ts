import { styled } from "@linaria/react";

const PageTocContainer = styled.div`
  min-width: 300px;
  max-width: 300px;
  padding: 24px;

  position: sticky;
  top: 60px;

  > strong {
    font-size: 14px;
    font-weight: 600px;
    color: var(--text-heading);
  }
`;

const PageTocList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    color: var(--text-body);
    font-size: 14px;
    line-height: 130%;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      color: var(--text-heading);
    }

    &.active {
      color: rgb(var(--spotlight-primary));
    }

    &.h2,
    &.h3,
    &.h4,
    &.h5,
    &.h6 {
      margin-top: 10px;
    }

    &.h3 {
      margin-left: 10px;
    }
  }
`;

export { PageTocContainer, PageTocList };
