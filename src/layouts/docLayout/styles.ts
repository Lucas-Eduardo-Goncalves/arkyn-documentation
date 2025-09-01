import { styled } from "@linaria/react";

const DocLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocLayoutWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  align-items: start;
`;

const DocContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  min-width: calc(1440px - 300px - 300px);
  max-width: calc(1440px - 300px - 300px);

  > h1 {
    margin-bottom: 24px;
  }

  > h2 {
    margin-top: 36px;
  }

  > h3,
  > h4,
  > h5 {
    margin-top: 24px;
  }

  > div,
  > strong,
  > ul,
  > hr {
    margin-top: 16px;
  }
`;

export { DocContentContainer, DocLayoutContainer, DocLayoutWrapper };
