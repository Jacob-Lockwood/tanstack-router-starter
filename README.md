# TanStack Router starter
This repo is sort of a starter-project for TanStack router and React. Keep in mind that TanStack router is still in early development and this is just a beta version, so this starter may (and probably will) break as newer versions of the router come out. I will do my best to maintain it but probably won't for very long.

## Get started:
```
npx degit jacobofbrooklyn/tanstack-router-starter my-new-app
cd my-new-app
npm install && npm run dev
```

## Usage:
To add a route, define it in `src/routes`:
```tsx
// src/routes/example.tsx
import React from "react";
import type { RouteComponent } from "@tanstack/react-router";
import { rootRoute } from "~/root";

export const Example: RouteComponent = () => (
  <main>
    <h1 className="text-lg font-bold">Example Route</h1>
    <p>This is an example section. Need an explanation?</p>
  </main>
);
const exampleRoute = rootRoute.createRoute({
  path: "/example",
  component: Example,
});
export default exampleRoute;
```
How you organize your files doesn't really matter since the router isn't file-system-based, but I've organized it similarly to how Remix does it. Once you've created the route, add it to `src/main.tsx`.

To change the top-level layout, edit `src/root.tsx`.

This project is set up to use TypeScript, React, and TailwindCSS.

For more info check out [the official docs](https://tanstack.com/router/1)
