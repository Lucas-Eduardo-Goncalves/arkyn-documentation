import arkynLogoPng from "~/assets/arkynFullLogo.png";
import { HeaderContainer } from "./styles";
import { Link } from "react-router";

function RootHeader() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img className="logoImage" src={arkynLogoPng} alt="arkyn" />
        </Link>
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
