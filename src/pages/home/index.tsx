import { Button } from "@arkyn/components";
import {
  ArrowRight,
  ExternalLink,
  LayoutTemplate,
  Rows3,
  Server,
  Waypoints,
} from "lucide-react";
import { useNavigate } from "react-router";

import arkynLogo from "~/assets/arkynLogo.png";

import { ApiIntroduction } from "./components/apiIntroduction";
import { ExampleItem } from "./components/exampleItem";
import { ExampleList } from "./components/exampleList";
import { Header, HomeContainer } from "./styles";

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

      <ExampleList>
        <ExampleItem
          to="/docs/components/introduction"
          icon={<LayoutTemplate />}
          title="@arkyn/components"
          description="Foundational components for shipping features faster."
        />
        <ExampleItem
          to="/docs/server/introduction"
          icon={<Server />}
          title="@arkyn/server"
          description="Server-side functions and services for building robust APIs."
        />
        <ExampleItem
          to="/docs/shared/introduction"
          icon={<Waypoints />}
          title="@arkyn/shared"
          description="Shared utilities, validations and formats for consistent design."
        />
        <ExampleItem
          to="/docs/templates/introduction"
          icon={<Rows3 />}
          title="@arkyn/templates"
          description="Pre-built templates for common application scenarios."
        />
      </ExampleList>

      <ApiIntroduction />
    </HomeContainer>
  );
}

export default Home;
