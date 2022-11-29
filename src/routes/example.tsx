import React from "react";
import type { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";

const Example: RouteComponent = () => (
  <main>
    <h1 className="text-lg font-bold">Example Page</h1>
    <p>This is an example page. Need an explanation?</p>
  </main>
);
const exampleRoute = rootRoute.createRoute({
  path: "/example",
  component: Example,
});
export default exampleRoute;
