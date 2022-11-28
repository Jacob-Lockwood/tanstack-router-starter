import React from "react";
import type { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";

const Home: RouteComponent = () => (
  <main>
    <h1 className="text-lg font-bold">Home Page</h1>
    <p>{`You're`} at the home page.</p>
  </main>
);
const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});
export default indexRoute;
