import React from "react";
import type { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const About: RouteComponent = () => (
  <main>
    <h1 className="text-lg font-bold">About</h1>
    <p>This is the about section. Need an explanation?</p>
  </main>
);
const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: About,
});
export default aboutRoute;
