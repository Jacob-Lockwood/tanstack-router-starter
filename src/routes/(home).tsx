import React from "react";
import type { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";
import Card from "~/components/Card";

const Home: RouteComponent = () => (
  <main>
    <h1 className="text-lg font-bold">Home Page</h1>
    <p>{`You're`} at the home page.</p>
    <div className="flex flex-wrap gap-5 mt-5">
      <Card>
        <h2 className="text-lg font-semibold">TanStack Router</h2>
        <p>
          Take a look at{" "}
          <a
            href="https://tanstack.com/router/v1/docs/overview"
            className="font-semibold underline underline-offset-2"
          >
            the WIP docs
          </a>
          , and{" "}
          <a
            href="https://github.com/TanStack/router"
            className="font-semibold underline underline-offset-2"
          >
            give the project a star on GitHub.
          </a>
        </p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Tailwind</h2>
        <p>
          You {"don't"} have to use Tailwind, I just think you should. Take a
          look at{" "}
          <a
            href="https://tailwindcss.com"
            className="font-semibold underline underline-offset-2"
          >
            the docs.
          </a>
        </p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">React</h2>
        <p>
          {`Don't`} know React? Take a look at the{" "}
          <a
            href="https://beta.reactjs.org"
            className="font-semibold underline underline-offset-2"
          >
            React docs
          </a>
        </p>
      </Card>
    </div>
    <p className="mt-5">
      Edit{" "}
      <code className="text-fuchsia-200 bg-black bg-opacity-10 p-1 rounded text-sm">
        src/routes/(home).tsx
      </code>{" "}
      to get started!
    </p>
  </main>
);
const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});
export default indexRoute;
