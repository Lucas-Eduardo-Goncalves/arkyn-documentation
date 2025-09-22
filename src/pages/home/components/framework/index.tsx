import { FrameworkContainer } from "./styles";

import astroLogo from "~/assets/astroLogo.svg";
import nextLogo from "~/assets/nextLogo.svg";
import remixLogo from "~/assets/remixLogo.svg";
import viteLogo from "~/assets/viteLogo.svg";

function Framework() {
  return (
    <FrameworkContainer>
      <section>
        <strong>Works with your favorite application framework</strong>
        <p>Seamlessly integrate Arkyn into your existing workflow</p>
        <span>
          Arkyn provides a consistent developer experience for most modern
          frameworks
        </span>
      </section>

      <div className="table">
        <div>
          <img src={viteLogo} alt="Vite" />
        </div>
        <div>
          <img src={astroLogo} alt="Astro" />
        </div>
        <div>
          <img src={nextLogo} alt="Next" className="next" />
        </div>
        <div>
          <img src={remixLogo} alt="Remix" />
        </div>
        <div>
          <img
            src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"
            alt="Gatsby"
          />
        </div>
      </div>
    </FrameworkContainer>
  );
}

export { Framework };
