import { HelpCircle, Layout } from "lucide-react";
import { dependencies } from "../../../package.json";
import { Card } from "./components/card";
import { GuideLink } from "./components/guideLink";
import { GuidesContainer, HeaderContainer } from "./styles";

export default function GuidesRoute() {
  return (
    <GuidesContainer>
      <HeaderContainer>
        <section>
          <strong>How can we help?</strong>
          <span>
            Find answers to common questions related to Arkyn v
            {dependencies["@arkyn/components"]}
          </span>
        </section>
      </HeaderContainer>

      <Card
        title="Guides"
        icon={HelpCircle}
        description="How to use Arkyn packages and features"
      >
        <GuideLink to="/docs/guides/how-do-i-use-imports">
          How do I use imports
        </GuideLink>
      </Card>

      <Card
        title="@arkyn/components"
        icon={Layout}
        description="Theming, configuration, styling and more"
      >
        <GuideLink to="/docs/guides/how-to-configure-components-theming">
          Configure theme
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-file-upload">
          Configure file upload
        </GuideLink>
      </Card>
    </GuidesContainer>
  );
}
