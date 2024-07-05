import React from "react";
import { Outlet } from "react-router-dom";

const Library: React.FC = () => {
  return (
    <div>
      <h2></h2>
      <Outlet />
    </div>
  );
};

export default Library;
