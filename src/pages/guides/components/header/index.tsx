import { HeaderContainer } from "./styles";

import { dependencies } from "../../../../../package.json";

function Header() {
  return (
    <HeaderContainer>
      <section>
        <strong>How can we help?</strong>
        <span>
          Find answers to common questions related to Arkyn v
          {dependencies["@arkyn/components"]}
        </span>
      </section>
    </HeaderContainer>
  );
}

export { Header };
