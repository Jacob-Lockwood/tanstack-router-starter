import { createReactRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout, rootRoute } from "./root";

// here are the routes
import indexRoute from "./routes/(home)";
import aboutRoute from "./routes/about";
import postsRoute from "./routes/posts";
import postsIndexRoute from "./routes/posts/(postsList)";
import postsViewRoute from "./routes/posts/$id";

// Add your routes here
export const routeConfig = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  // for nested routes:
  postsRoute.addChildren([postsIndexRoute, postsViewRoute]),
]);

export const router = createReactRouter({ routeConfig });

export const { Link, useMatch } = router;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
