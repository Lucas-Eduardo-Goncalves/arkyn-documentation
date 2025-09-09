import { type ReactNode } from "react";
import { ExampleListContainer } from "./styles";

type ExampleListProps = {
  children: ReactNode;
};

function ExampleList(props: ExampleListProps) {
  const { children } = props;
  return (
    <ExampleListContainer>
      <section>
        <strong>Products</strong>
        <p>Every component you need is ready for production</p>
        <span>
          Build at an accelerated pace without sacrificing flexibility or
          control.
        </span>

        <ul>{children}</ul>
      </section>
    </ExampleListContainer>
  );
}

export { ExampleList };
