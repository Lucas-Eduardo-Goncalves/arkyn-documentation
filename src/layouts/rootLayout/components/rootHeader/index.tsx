import { Badge } from "@arkyn/components";
import { Link, useLocation } from "react-router";
import { animateScroll } from "react-scroll";

import arkynLogoPng from "~/assets/arkynFullLogo.png";
import { ProductsMenu } from "../productsMenu";
import { HeaderContainer } from "./styles";

function RootHeader() {
  const location = useLocation();

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
            src={arkynLogoPng}
            alt="arkyn"
            onClick={toTop}
          />
        )}

        {location.pathname !== "/" && (
          <Link to="/">
            <img className="logoImage" src={arkynLogoPng} alt="arkyn" />
          </Link>
        )}

        <ProductsMenu />

        <Link to="/docs/changelog">Changelog</Link>
        <Link to="/guides/introduction">Guides</Link>

        {/* <Badge variant="outline">v3.2.0</Badge> */}
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
