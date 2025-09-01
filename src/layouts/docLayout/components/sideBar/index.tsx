import { useLocation } from "react-router";
import type { MenuType } from "../menu/_type";
import { COMPONENTS_MENU } from "../menu/components";
import { SERVER_MENU } from "../menu/server";
import { SHARED_MENU } from "../menu/shared";
import { SideGroup } from "../sideGroup";
import { SideLink } from "../sideLink";
import { SideBarContainer } from "./styles";

function ItemSwitch({ label, children, to }: MenuType) {
  if (!children && to) {
    return <SideLink to={to} label={label} />;
  }

  if (children && children.length > 0) {
    return (
      <SideGroup label={label}>
        {children.map((child, index) => (
          <ItemSwitch key={index} {...child} />
        ))}
      </SideGroup>
    );
  }

  return <></>;
}

function SideBar() {
  const { pathname } = useLocation();

  function rederMenus() {
    if (pathname.includes("components")) return COMPONENTS_MENU;
    if (pathname.includes("server")) return SERVER_MENU;
    if (pathname.includes("shared")) return SHARED_MENU;
    return [];
  }

  return (
    <SideBarContainer>
      {rederMenus().map((item, index) => (
        <ItemSwitch key={index} {...item} />
      ))}
    </SideBarContainer>
  );
}

export { SideBar };
