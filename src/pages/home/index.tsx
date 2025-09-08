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
            <span>Arkyn</span>, a complete ecosystem for building modern web
            applications.
          </h1>
          <h2>
            Build modern applications from marketing websites to AI-powered apps
            and publish in seconds with the Arkyn ecosystem.
          </h2>
          <div>
            <Button rightIcon={ArrowRight} onClick={handleStart}>
              Start now
            </Button>
            <Button
              variant="outline"
              rightIcon={ExternalLink}
              onClick={goToGithub}
            >
              View on github
            </Button>
          </div>
        </section>

        <img src={arkynLogo} alt="arkyn" />
      </Header>
    </HomeContainer>
  );
}

export default Home;
