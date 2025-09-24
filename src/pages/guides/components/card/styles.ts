import { styled } from "@linaria/react";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;
    gap: 12px;

    .iconContainer {
      padding: 8px;
      border-radius: 6px;
      background-color: rgb(var(--spotlight-primary));

      svg {
        height: 24px;
        width: 24px;
        color: #ffffff;
      }
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 8px;

      div {
        display: flex;
        align-items: center;
        gap: 8px;

        strong {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-heading);
        }
      }

      p {
        font-size: 14px;
        font-weight: 500;
        color: var(--text-body);
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    margin-top: 32px;
    gap: 16px;
  }
`;

export { CardContainer };
