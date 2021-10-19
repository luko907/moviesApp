import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
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
