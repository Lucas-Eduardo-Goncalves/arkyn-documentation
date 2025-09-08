import { type RouteConfigEntry, route } from "@react-router/dev/routes";

const DOC_PATH = "../docs";
const docs = import.meta.glob(`../docs/**/*.{md,mdx}`);

function generateDocRoutes(): RouteConfigEntry[] {
  const keys: [string, string][] = [];

  Object.keys(docs).forEach((rawPath) => {
    const routePath = rawPath.replace(DOC_PATH, "").replace(/\.(md|mdx)$/, "");
    const path = rawPath.replace(DOC_PATH, "./docs");

    keys.push([routePath, path]);
  });

  return keys.map(([routePath, path]) =>
    route(routePath.replace("/", ""), path)
  );
}

export { generateDocRoutes };
