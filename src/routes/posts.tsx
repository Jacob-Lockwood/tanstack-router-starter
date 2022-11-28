import React from "react";
import { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";
import { useMatch } from "~/main";
import { Post } from "~/utils/types";

const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await response.json()) as Post[];
  return { posts };
};

const PostsList: RouteComponent = () => {
  const { posts } = useMatch(postsRoute.id).loaderData;
  return (
    <main>
      <h1 className="text-lg font-bold">Posts Page</h1>
      <p>{`You're`} at the Posts page.</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {posts.map((post) => (
          <article key={post.id} className="shadow-sm shadow-slate-600 p-2">
            <h2 className="text-md font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

const postsRoute = rootRoute.createRoute({
  path: "/posts",
  component: PostsList,
  loader,
});

export default postsRoute;
