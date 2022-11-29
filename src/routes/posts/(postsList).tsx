import React from "react";
import { RouteComponent } from "@tanstack/react-router";
import { Link, useMatch } from "~/main";
import { Post } from "~/utils/types";
import Card from "~/components/Card";
import postsRoute from "../posts";

const PostsList: RouteComponent = () => {
  const { posts } = useMatch(postsIndexRoute.id).loaderData;
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {posts.map((post) => (
        <Card key={post.id}>
          <article>
            <h2 className="text-md font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              to="/posts/$id"
              params={{ id: post.id.toString() }}
              className="font-semibold underline underline-offset-2"
            >
              View post
            </Link>
          </article>
        </Card>
      ))}
    </div>
  );
};

const postsIndexRoute = postsRoute.createRoute({
  path: "/",
  component: PostsList,
  loader: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = (await response.json()) as Post[];
    return { posts };
  },
});

export default postsIndexRoute;
