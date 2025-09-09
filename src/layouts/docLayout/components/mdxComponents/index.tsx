import { Divider } from "@arkyn/components";
import { useId, type HTMLAttributes } from "react";

import { CodeBlock } from "~/components/codeBlock";
import "./styles.css";

type HeadingType = HTMLAttributes<HTMLHeadingElement>;
type UlType = HTMLAttributes<HTMLUListElement>;
type LiType = HTMLAttributes<HTMLLIElement>;
type PType = HTMLAttributes<HTMLParagraphElement>;
type AType = HTMLAttributes<HTMLAnchorElement>;
type GenericType = HTMLAttributes<HTMLElement>;

const mdxComponents = {
  h1: (props: HeadingType) => <h1 className="mdx-h1" id={useId()} {...props} />,
  h2: (props: HeadingType) => <h2 className="mdx-h2" id={useId()} {...props} />,
  h3: (props: HeadingType) => <h3 className="mdx-h3" id={useId()} {...props} />,
  h4: (props: HeadingType) => <h4 className="mdx-h4" id={useId()} {...props} />,
  h5: (props: HeadingType) => <h5 className="mdx-h5" id={useId()} {...props} />,
  ul: (props: UlType) => <ul className="mdx-ul" {...props} />,
  ol: (props: UlType) => <ol className="mdx-ol" {...props} />,
  li: (props: LiType) => <li className="mdx-li" {...props} />,
  p: (props: PType) => <div className="mdx-p" {...props} />,
  a: (props: AType) => <a className="mdx-a" {...props} />,
  hr: () => <Divider />,
  strong: (props: GenericType) => <strong className="mdx-strong" {...props} />,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
};

export { mdxComponents };
