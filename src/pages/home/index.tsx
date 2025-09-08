import { Button } from "@arkyn/components";
import { ArrowRight, ExternalLink } from "lucide-react";

import arkynLogo from "~/assets/arkynLogo.png";
import { Header, HomeContainer } from "./styles";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/docs/introduction");
  }

  function goToGithub() {
    window.open("https://github.com/Lucas-Eduardo-Goncalves/arkyn", "_blank");
  }

  return (
    <HomeContainer>
      <Header>
        <section>
          <h1>
            <span>Arkyn</span>, um ecossistema completo <br /> para construir
            aplicações web modernas.
          </h1>
          <h2>
            Construa aplicações modernas de sites de marketing a apps com IA e
            publique em segundos com o ecossistema Arkyn.
          </h2>
          <div>
            <Button rightIcon={ArrowRight}>Começar agora</Button>
            <Button
              variant="outline"
              rightIcon={ExternalLink}
              onClick={goToGithub}
            >
              Ver no github
            </Button>
          </div>
        </section>

        <img src={arkynLogo} alt="arkyn" />
      </Header>
    </HomeContainer>
  );
}

export default Home;
