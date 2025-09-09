import { Link } from "react-router";
import { Badge } from "@arkyn/components";

import arkynLogoPng from "~/assets/arkynFullLogo.png";
import { dependencies } from "../../../../../package.json";
import { HeaderContainer } from "./styles";

function RootHeader() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img className="logoImage" src={arkynLogoPng} alt="arkyn" />
        </Link>

        <Badge variant="outline">v{dependencies["@arkyn/components"]}</Badge>
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
