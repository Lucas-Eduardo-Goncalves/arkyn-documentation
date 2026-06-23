import { DocSearch } from "@docsearch/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_READ_API_KEY,
} from "~/templates/algolia";
import { Container } from "./styles";
import { useHydrated } from "@arkyn/components";

function AlgoliaSearch() {
  const isConfigured = Boolean(
    ALGOLIA_APP_ID && ALGOLIA_READ_API_KEY && ALGOLIA_INDEX_NAME,
  );

  const [show, setShow] = useState(false);

  function isMacOs(): boolean {
    if (useHydrated() === false) return false;
    return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!isConfigured || show === false) {
    return (
      <Container>
        <button className="searchButton" type="button" disabled>
          <Search size={20} />
          <span>Search docs</span>
          <kbd>{isMacOs() ? "⌘" : "Ctrl"}</kbd>
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
