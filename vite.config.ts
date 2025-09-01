import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import wyw from "@wyw-in-js/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    wyw(),
    mdx({ providerImportSource: "@mdx-js/react" }),
    devtoolsJson(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
