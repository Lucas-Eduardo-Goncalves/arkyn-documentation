import { Divider } from "@arkyn/components";
import { styled } from "@linaria/react";

const H1 = styled.h1`
  position: relative;

  font-size: 36px;
  color: var(--text-heading);
  padding-bottom: 24px;

  &::after {
    content: "";
    left: 0px;
    right: 0px;
    bottom: 0px;

    min-height: 1px;
    position: absolute;
    background-color: var(--border);
  }
`;

const H2 = styled.h2`
  font-size: 28px;
  color: var(--text-heading);
`;

const H3 = styled.h3`
  font-size: 24px;
  color: var(--text-heading);
`;

const H4 = styled.h4`
  font-size: 20px;
  color: var(--text-heading);
`;

const H5 = styled.h5`
  font-size: 16px;
  color: var(--text-heading);
`;

const P = styled.div`
  font-size: 16px;
  line-height: 170%;
  color: var(--text-body);
`;

const Strong = styled.strong`
  font-size: 16px;
  line-height: 170%;
  font-weight: 600;
  color: var(--text-heading);
`;

const A = styled.a`
  font-size: 16px;
  line-height: 170%;
  color: rgb(var(--spotlight-primary));
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 32px;

  li::before {
    content: " ";
    position: absolute;
    left: -16px;
    top: 0.85em;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--text-body);
  }
`;

const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 32px;

  li::before {
    content: counter(list-item) ".";
    position: absolute;
    left: -24px;
    top: 0;
    font-weight: 600;
    color: var(--text-body);
  }
`;

const Li = styled.li`
  position: relative;
  list-style: none;
  font-size: 16px;

  line-height: 170%;
  color: var(--text-body);
`;

const Hr = styled(Divider)`
  /* margin-top: 16px; */
`;

export { A, H1, H2, H3, H4, H5, Hr, Li, P, Strong, Ul, Ol };
