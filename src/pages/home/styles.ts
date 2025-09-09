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

const ExampleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  height: 100vh;

  > section {
    display: flex;
    flex-direction: column;
    min-width: 700px;

    > strong {
      color: rgb(var(--spotlight-primary));
      font-size: 16px;
      font-weight: 600;
    }

    > p {
      font-size: 32px;
      font-weight: 700;
      color: var(--text-heading);
      margin: 16px 0;
    }

    > span {
      font-size: 16px;
      color: var(--text-body);
      max-width: 400px;
      line-height: 130%;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 32px;
      list-style: none;
    }
  }
`;

export { HomeContainer, Header, ExampleContainer };
