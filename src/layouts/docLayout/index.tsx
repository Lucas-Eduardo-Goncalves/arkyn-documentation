import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "react-router";
import StickyBox from "react-sticky-box";

import { mdxComponents } from "./components/mdxComponents";
import { PageToc } from "./components/pageToc";
import { SideBar } from "./components/sideBar";

import {
  DocContentContainer,
  DocLayoutContainer,
  DocLayoutWrapper,
} from "./styles";

function DocLayout() {
  return (
    <DocLayoutContainer>
      <DocLayoutWrapper>
        <StickyBox offsetTop={60}>
          <SideBar />
        </StickyBox>

        <StickyBox offsetTop={60}>
          <DocContentContainer>
            <MDXProvider components={mdxComponents}>
              <Outlet />
            </MDXProvider>
          </DocContentContainer>
        </StickyBox>

        <PageToc />
      </DocLayoutWrapper>
    </DocLayoutContainer>
  );
}

export default DocLayout;
