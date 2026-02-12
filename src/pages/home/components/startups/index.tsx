import { StartupsContainer } from "./styles";
import agendaCatolicaLogo from "~/assets/agendaCatolicaLogo.svg";
import oracaoLogo from "~/assets/oracaoPlayLogo.svg";
import m2g2Logo from "~/assets/m2g2Logo.svg";
import sanctonLogo from "~/assets/sanctonLogo.svg";

function Startups() {
  return (
    <StartupsContainer>
      <section>
        <strong>Built for modern product teams</strong>
        <p>Trusted by startups and enterprises worldwide</p>
        <span>From next-gen startups to established enterprises</span>
      </section>

      <div className="table">
        <div>
          <img src={agendaCatolicaLogo} alt="AgendaCatólica" />
        </div>
        <div>
          <img src={sanctonLogo} alt="Sancton" />
        </div>
        <div>
          <img src={oracaoLogo} alt="OraçãoPlay" />
        </div>
        <div>
          <img src={m2g2Logo} alt="M2G2Patrimonial" />
        </div>
      </div>
    </StartupsContainer>
  );
}

export { Startups };
