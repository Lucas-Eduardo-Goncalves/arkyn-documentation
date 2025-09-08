import { styled } from "@linaria/react";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 120px 20px;
  gap: 20px;

  > section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-size: 48px;
      font-weight: 700;
      color: var(--text-heading);
      max-width: 800px;

      span {
        color: rgb(var(--spotlight-primary));
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: var(--text-body);
      line-height: 130%;
      max-width: 700px;
    }

    > div {
      display: flex;
      gap: 8px;
    }
  }

  > img {
    height: 500px;
    width: 500px;
  }
`;

export { HomeContainer, Header };
