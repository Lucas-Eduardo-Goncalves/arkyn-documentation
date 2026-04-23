import { Link, useLocation } from "react-router";
import { Badge } from "@arkyn/components";

import arkynLogoPng from "~/assets/arkynFullLogo.png";
import { dependencies } from "../../../../../package.json";
import { HeaderContainer } from "./styles";
import { animateScroll } from "react-scroll";

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

        <Badge variant="outline">v{dependencies["@arkyn/components"]}</Badge>
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
