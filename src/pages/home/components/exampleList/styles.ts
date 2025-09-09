import { styled } from "@linaria/react";

const ExampleListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  padding: 120px 20px;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 700px;
    max-width: 700px;

    > strong {
      color: rgb(var(--spotlight-primary));
      font-size: 16px;
      font-weight: 600;
    }

    > p {
      font-size: 32px;
      font-weight: 700;
      color: var(--text-heading);
      text-align: center;
      margin: 16px 0;
    }

    > span {
      font-size: 16px;
      color: var(--text-body);
      line-height: 130%;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 32px;
      list-style: none;

      width: 100%;
    }
  }
`;

export { ExampleListContainer };
