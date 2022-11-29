import React from "react";
import { createRouteConfig, Outlet } from "@tanstack/react-router";
import { Link } from "./main";

export const Layout = () => (
  <div className="p-5 min-h-screen text-white bg-gradient-to-r from-fuchsia-800 to-indigo-700">
    <header className="text-lg bg-black bg-opacity-20 px-5 mb-5 rounded-lg">
      <nav className="flex gap-5 py-5">
        <Link to="/" className="text-sky-300 underline">
          Home
        </Link>
        <Link to="/about" className="text-sky-300 underline">
          About
        </Link>
        <Link to="/posts" className="text-sky-300 underline">
          Posts
        </Link>
      </nav>
    </header>
    <Outlet />
  </div>
);
export const rootRoute = createRouteConfig();
