import { styled } from "@linaria/react";

const GuidesContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1440px;
  margin: 0 auto;
  gap: 48px;
  padding: 48px 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  padding: 120px 20px;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;

    min-width: 700px;
    max-width: 700px;

    > strong {
      font-size: 48px;
      font-weight: 700;
      color: var(--text-heading);
      text-align: center;
    }

    > span {
      font-size: 16px;
      color: var(--text-body);
      line-height: 130%;
      text-align: center;
    }
  }
`;

export { GuidesContainer, HeaderContainer };
