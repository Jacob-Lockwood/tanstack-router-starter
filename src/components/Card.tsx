import React from "react";
import type { FC, ReactNode } from "react";

const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-fuchsia-100 bg-opacity-70 text-indigo-800 rounded-lg shadow-md shadow-indigo-900 px-5 py-8">
    {children}
  </div>
);
export default Card;
