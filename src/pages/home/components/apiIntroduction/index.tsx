import { Button } from "@arkyn/components";
import { ArrowRight } from "lucide-react";
import { ApiIntroductionContainer } from "./styles";
import { useNavigate } from "react-router";

function ApiIntroduction() {
  const navigate = useNavigate();

  function handleLearnAbout() {
    navigate("/docs/api/introduction");
  }

  return (
    <ApiIntroductionContainer>
      <section>
        <strong>Log management</strong>
        <p>Maintain the integrity of your applications.</p>
        <span>
          Our comprehensive API provides powerful tools to track, analyze, and
          manage your application logs in real time.
        </span>
        <Button rightIcon={ArrowRight} onClick={handleLearnAbout}>
          Learn about
        </Button>
      </section>
    </ApiIntroductionContainer>
  );
}

export { ApiIntroduction };
