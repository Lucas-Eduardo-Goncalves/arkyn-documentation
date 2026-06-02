import { type RouteConfigEntry, route } from "@react-router/dev/routes";

const DOC_PATH = "../docs";
const docs = import.meta.glob(`../docs/**/*.{md,mdx}`);

function shouldIgnorePath(rawPath: string) {
  const pathSegments = rawPath
    .replace(`${DOC_PATH}/`, "")
    .split("/")
    .filter(Boolean);

  return pathSegments.some((segment) => segment.startsWith("_"));
}

function generateDocRoutes(): RouteConfigEntry[] {
  const keys: [string, string][] = [];

  Object.keys(docs).forEach((rawPath) => {
    if (shouldIgnorePath(rawPath)) return;

    const routePath = rawPath.replace(DOC_PATH, "").replace(/\.(md|mdx)$/, "");
    const path = rawPath.replace(DOC_PATH, "./docs");

    keys.push([routePath, path]);
  });

  return keys.map(([routePath, path]) =>
    route(routePath.replace("/", ""), path),
  );
}

export { generateDocRoutes };
