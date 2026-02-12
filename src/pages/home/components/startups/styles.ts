import { styled } from "@linaria/react";

const StartupsContainer = styled.div`
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
      color: rgb(var(--spotlight-primary));
      font-size: 16px;
      font-weight: 600;
    }

    > p {
      font-size: 32px;
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

  .table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--border);
    border-radius: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 20px 30px;
      flex: 1;

      img {
        max-width: 120px;
      }

      &:nth-child(4n) {
        border-right: none;
      }

      &:nth-last-child(-n + 4) {
        border-bottom: none;
      }
    }
  }
`;

export { StartupsContainer };
