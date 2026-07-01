import type { ReactNode } from "react";
import logo from "../../../../assets/arkynLogo.png";

import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import "~/themes/reset.css";

import "@arkyn/components/styles";
import "@docsearch/css/dist/style.css";

import { useTheme } from "~/hooks/useTheme";
import { RootDocumentContainer } from "./styles";

type RootDocument = {
  children: ReactNode;
};

function RootDocument({ children }: RootDocument) {
  const { theme } = useTheme();
  const description =
    "A modern React component library for building fast, accessible, and elegant user interfaces.";

  return (
    <html lang="pt-br" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Arkyn" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://docs.arkyn.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arkyn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arkyn" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />

        <Meta />
        <Links />
      </head>

      <RootDocumentContainer>
        {children}
        <ScrollRestoration />
        <Scripts />
      </RootDocumentContainer>
    </html>
  );
}

export { RootDocument };
