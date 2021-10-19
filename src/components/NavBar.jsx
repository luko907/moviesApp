import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.svg";

export default function NavBar() {
  return (
    <header>
      <div>
        <NavLink exact to="/">
          <img id="" src={Logo} alt="" />
        </NavLink>
        <NavLink exact to="/">
          Favorites
        </NavLink>
      </div>
    </header>
  );
}
