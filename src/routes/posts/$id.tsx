import React from "react";
import { RouteComponent } from "@tanstack/react-router";
import { useMatch } from "~/main";
import { Post } from "~/utils/types";
import postsRoute from "../posts";

const PostsList: RouteComponent = () => {
  const { post } = useMatch(postViewRoute.id).loaderData;
  return (
    <article className="py-5">
      <h2 className="text-md font-semibold">{post.title}</h2>
      <p className="max-w-xl">{post.body}</p>
    </article>
  );
};

const postViewRoute = postsRoute.createRoute({
  path: "$id",
  component: PostsList,
  loader: async ({ params }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = (await response.json()) as Post;
    return { post };
  },
});

export default postViewRoute;
