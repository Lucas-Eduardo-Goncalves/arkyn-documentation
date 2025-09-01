import type { ReactNode } from "react";

import { ProgressBar } from "~/components/progressBar";

import { RootContent } from "./components/rootContent";
import { RootDocument } from "./components/rootDocument";
import { RootFooter } from "./components/rootFooter";
import { RootHeader } from "./components/rootHeader";
import { RootProviders } from "./components/rootProviders";

import { rootLinks } from "./meta/links";
import { rootMeta } from "./meta/meta";

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <RootProviders>
      <RootDocument>
        <ProgressBar />
        <RootHeader />
        <RootContent>{children}</RootContent>
        <RootFooter />
      </RootDocument>
    </RootProviders>
  );
}

export { RootLayout, rootLinks, rootMeta };
