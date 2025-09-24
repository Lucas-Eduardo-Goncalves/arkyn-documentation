import { Layout, Server } from "lucide-react";
import { Card } from "./components/card";
import { GuideLink } from "./components/guideLink";
import { Header } from "./components/header";

import { GuidesContainer } from "./styles";

export default function GuidesRoute() {
  return (
    <GuidesContainer>
      <Header />

      <Card
        title="@arkyn/components"
        icon={Layout}
        description="Theming, configuration, styling and more"
      >
        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Configure theme
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Dark and light mode
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Styling components
        </GuideLink>
      </Card>

      <Card
        title="@arkyn/api"
        icon={Server}
        description="How to use, configure webhooks, manage logs"
      >
        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Configure Discord webhook
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Create and manage API keys
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Create your first log monitor
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Integrate with third-party services
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Integrate with arkyn packages
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Understand log levels and filtering
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Explain coreLogs
        </GuideLink>

        <GuideLink to="/docs/guides/how-to-configure-discord-webhook">
          Explain httpTrafficRecord
        </GuideLink>
      </Card>
    </GuidesContainer>
  );
}
