import { styled } from "@linaria/react";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: var(--background-foreground);
  border-bottom: 1px solid var(--border);

  height: 60px;
  padding: 16px 24px;
  z-index: 3;

  > div {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoImage {
      height: 40px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export { HeaderContainer, ButtonGroup };
