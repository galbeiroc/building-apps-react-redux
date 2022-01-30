import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeColor = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeColor} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeColor}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeColor}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
