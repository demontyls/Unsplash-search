import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Base = () => {
  return (
    <div>
      <nav className="navbar navbar-light fixed-top bg-light px-3">
        <NavLink className="navbar-brand" to="/main">Main</NavLink>
        <NavLink className="navbar-brand" to="/start">Start</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Base;