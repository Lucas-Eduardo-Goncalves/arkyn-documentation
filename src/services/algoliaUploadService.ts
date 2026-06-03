import { algoliasearch } from "algoliasearch";
import { formatToCapitalizeFirstWordLetter } from "@arkyn/shared";
import { readFileSync } from "fs";
import { glob } from "glob";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import {
  ALGOLIA_WRITE_API_KEY,
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
} from "~/templates/algolia";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = resolve(__dirname, "../docs");

function shouldIgnorePath(relativePath: string): boolean {
  return relativePath.split("/").some((segment) => segment.startsWith("_"));
}

function filePathToRoute(relativePath: string): string {
  const withoutExt = relativePath.replace(/\.(md|mdx)$/, "");
  return "/docs/" + withoutExt;
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function extractTextContent(content: string): string {
  return content
    .replace(/^import\s[\s\S]*?;$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#+\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function buildHierarchy(
  segments: string[],
  title: string,
): Record<string, string | null> {
  // const levels = ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4", "lvl5", "lvl6"];
  // const hierarchy: Record<string, string | null> = Object.fromEntries(
  //   levels.map((l) => [l, null]),
  // );

  // segments.forEach((segment, i) => {
  //   if (i < levels.length) {
  //     hierarchy[levels[i]] =
  //       i === segments.length - 1 ? title || segment : segment;
  //   }
  // });

  // return hierarchy;

  function format(string?: string): string | null {
    if (typeof string !== "string") return null;
    return formatToCapitalizeFirstWordLetter(string);
  }

  return {
    lvl0: format(segments[1]),
    lvl1: title,
    lvl2: format(segments[2]),
    lvl3: null,
    lvl4: null,
    lvl5: null,
    lvl6: null,
  };
}

async function generateAlgoliaRecords() {
  const files = await glob("**/*.{md,mdx}", {
    cwd: DOCS_DIR,
    posix: true,
  });

  const records = [];

  for (const relativePath of files) {
    if (shouldIgnorePath(relativePath)) continue;

    const route = filePathToRoute(relativePath);
    const rawContent = readFileSync(resolve(DOCS_DIR, relativePath), "utf-8");
    const title = extractTitle(rawContent);
    const content = extractTextContent(rawContent).slice(0, 2000);
    const segments = route.split("/").filter(Boolean);
    const hierarchy = buildHierarchy(segments, title);

    records.push({
      type: "lvl1",
      title,
      content,
      url: route,
      objectID: route,
      hierarchy,
    });
  }

  return records;
}

async function uploadAlgoliaIndex() {
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY);
  const objects = await generateAlgoliaRecords();

  await client.deleteObjects({
    indexName: ALGOLIA_INDEX_NAME,
    objectIDs: objects.map((obj) => obj.objectID),
    waitForTasks: true,
  });

  await client.saveObjects({
    indexName: ALGOLIA_INDEX_NAME,
    objects,
    waitForTasks: true,
    batchSize: 1000,
  });

  console.log(
    `Uploaded ${objects.length} records to Algolia index "${ALGOLIA_INDEX_NAME}".`,
  );
}

await uploadAlgoliaIndex();
