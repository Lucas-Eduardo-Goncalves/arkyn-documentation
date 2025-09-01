import type { ReactNode } from "react";
import { RootContentContainer } from "./styles";

type RootContentProps = {
  children: ReactNode;
};

function RootContent(props: RootContentProps) {
  const { children } = props;
  return <RootContentContainer>{children}</RootContentContainer>;
}

export { RootContent };
