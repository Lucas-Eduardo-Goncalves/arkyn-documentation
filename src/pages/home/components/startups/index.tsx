import { StartupsContainer } from "./styles";

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
          <img
            src="https://i.ibb.co/TYVmNMS/agenda-logo.png"
            alt="AgendaCatólica"
          />
        </div>
        <div>
          <img
            src="https://sancton.s3.us-east-2.amazonaws.com/sancton_fundo_claro.png"
            alt="Sancton"
          />
        </div>
        <div>oraçãoplay</div>
      </div>
    </StartupsContainer>
  );
}

export { Startups };
