import React from "react";
import { createRouteConfig, Outlet } from "@tanstack/react-router";
import { Link } from "./main";

export const Layout = () => (
  <div className="p-5">
    <header className="text-lg">
      <nav className="flex gap-5 py-5">
        <Link to="/" className="text-sky-700 underline">
          Home
        </Link>
        <Link to="/about" className="text-sky-700 underline">
          About
        </Link>
        <Link to="/posts" className="text-sky-700 underline">
          Posts
        </Link>
      </nav>
    </header>
    <Outlet />
  </div>
);
export const rootRoute = createRouteConfig();
