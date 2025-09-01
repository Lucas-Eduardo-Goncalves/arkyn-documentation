import { useLocation } from "react-router";
import { SideLinkContainer } from "./styles";

type SideLinkProps = {
  to: string;
  label: string;
};

function SideLink({ to, label }: SideLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <SideLinkContainer
      to={to}
      prefetch="viewport"
      className={isActive ? "active" : ""}
    >
      {label}
    </SideLinkContainer>
  );
}

export { SideLink, type SideLinkProps };
