import { Outlet } from "react-router";
import { RootLayout, rootLinks, rootMeta } from "./layouts/rootLayout";

export const meta = rootMeta;
export const links = rootLinks;

export const Layout = RootLayout;
export default function RootRoute() {
  return <Outlet />;
}
