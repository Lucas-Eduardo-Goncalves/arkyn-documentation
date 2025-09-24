import { ChevronRight } from "lucide-react";
import { GuideLinkContainer } from "./styles";

type GuideLinkProps = {
  to: string;
  children: React.ReactNode;
};

function GuideLink({ children, to }: GuideLinkProps) {
  return (
    <GuideLinkContainer to={to} prefetch="intent">
      {children}
      <ChevronRight />
    </GuideLinkContainer>
  );
}

export { GuideLink };
