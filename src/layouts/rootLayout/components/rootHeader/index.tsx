import { IconButton } from "@arkyn/components/iconButton";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";
import { animateScroll } from "react-scroll";

import arkynLogoLightPng from "~/assets/arkynFullLogo.png";
import arkynLogoDarkPng from "~/assets/arkynFullLogoDark.png";
import { useTheme } from "~/hooks/useTheme";
import { AlgoliaSearch } from "../algoliaSearch";
import { ProductsMenu } from "../productsMenu";
import { HeaderContainer } from "./styles";

function RootHeader() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  function toTop() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  }

  return (
    <HeaderContainer>
      <div>
        {location.pathname === "/" && (
          <img
            className="logoImage"
            src={theme === "light" ? arkynLogoLightPng : arkynLogoDarkPng}
            alt="arkyn"
            onClick={toTop}
          />
        )}

        {location.pathname !== "/" && (
          <Link to="/" className="logoLink">
            <img
              className="logoImage"
              src={theme === "light" ? arkynLogoLightPng : arkynLogoDarkPng}
              alt="arkyn"
            />
          </Link>
        )}

        <ProductsMenu />

        <Link to="/docs/changelog">Changelog</Link>
        <Link to="/guides/introduction">Guides</Link>

        <AlgoliaSearch />

        <IconButton
          variant="outline"
          scheme="secondary"
          aria-label="Toggle dark mode"
          icon={theme === "light" ? Moon : Sun}
          onClick={toggleTheme}
        />
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
