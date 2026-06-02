import { DocSearch } from "@docsearch/react";
import { Search } from "lucide-react";
import {
  ALGOLIA_READ_API_KEY,
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
} from "~/templates/algolia";
import { Container } from "./styles";

function AlgoliaSearch() {
  const isConfigured = Boolean(
    ALGOLIA_APP_ID && ALGOLIA_READ_API_KEY && ALGOLIA_INDEX_NAME,
  );

  if (!isConfigured) {
    return (
      <Container>
        <button className="searchButton" type="button" disabled>
          <Search size={16} />
          <span>Search docs</span>
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <DocSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_READ_API_KEY}
        indices={[ALGOLIA_INDEX_NAME]}
        placeholder="Search docs"
        translations={{
          button: {
            buttonText: "Search docs",
            buttonAriaLabel: "Search docs",
          },
        }}
      />
    </Container>
  );
}

export { AlgoliaSearch };
