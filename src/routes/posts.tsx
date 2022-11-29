import React from "react";
import { Outlet, RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";
const PostsLayout: RouteComponent = () => {
  return (
    <main>
      <h1 className="text-lg font-bold">Posts</h1>
      <Outlet />
    </main>
  );
};

const postsRoute = rootRoute.createRoute({
  path: "/posts",
  component: PostsLayout,
});

export default postsRoute;
