import arkynLogoPng from "~/assets/arkynFullLogo.png";
import { HeaderContainer } from "./styles";

function RootHeader() {
  return (
    <HeaderContainer>
      <div>
        <img className="logoImage" src={arkynLogoPng} alt="arkyn" />
      </div>
    </HeaderContainer>
  );
}

export { RootHeader };
