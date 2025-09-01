import type { ReactNode } from "react";
import { SideGroupContainer } from "./styles";

type SideGroupProps = {
  label: string;
  children: ReactNode;
};

function SideGroup({ children, label }: SideGroupProps) {
  return (
    <SideGroupContainer>
      <strong>{label}</strong>
      {children}
    </SideGroupContainer>
  );
}

export { SideGroup };
