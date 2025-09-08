import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { generateDocRoutes } from "./services/generateDocRoutes";

export default [
  index("./pages/home/index.tsx"),
  route("/docs", "./layouts/docLayout/index.tsx", [...generateDocRoutes()]),
] satisfies RouteConfig;
