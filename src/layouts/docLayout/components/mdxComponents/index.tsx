import { useId, type HTMLAttributes } from "react";
import { CodeBlock } from "./codeBlock";
import { A, H1, H2, H3, H4, H5, Hr, Li, P, Strong, Ul } from "./styled";

type HeadingType = HTMLAttributes<HTMLHeadingElement>;
type UlType = HTMLAttributes<HTMLUListElement>;
type LiType = HTMLAttributes<HTMLLIElement>;
type PType = HTMLAttributes<HTMLParagraphElement>;
type AType = HTMLAttributes<HTMLAnchorElement>;
type GenericType = HTMLAttributes<HTMLElement>;

const mdxComponents = {
  h1: (props: HeadingType) => <H1 id={useId()} {...props} />,
  h2: (props: HeadingType) => <H2 id={useId()} {...props} />,
  h3: (props: HeadingType) => <H3 id={useId()} {...props} />,
  h4: (props: HeadingType) => <H4 id={useId()} {...props} />,
  h5: (props: HeadingType) => <H5 id={useId()} {...props} />,
  ul: (props: UlType) => <Ul id={useId()} {...props} />,
  li: (props: LiType) => <Li id={useId()} {...props} />,
  p: (props: PType) => <P id={useId()} {...props} />,
  a: (props: AType) => <A id={useId()} {...props} />,
  hr: () => <Hr />,
  strong: (props: GenericType) => <Strong {...props} />,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
};

export { mdxComponents };
