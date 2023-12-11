import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Base;