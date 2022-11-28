import { createReactRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout, rootRoute } from "./root";

import indexRoute from "./routes/(home)";
import aboutRoute from "./routes/about";
import postsRoute from "./routes/posts";

const routes = [indexRoute, aboutRoute, postsRoute] as const;

export const routeConfig = rootRoute.addChildren(Object.values(routes));

export const router = createReactRouter({ routeConfig });

export const { Link, useMatch } = router;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
