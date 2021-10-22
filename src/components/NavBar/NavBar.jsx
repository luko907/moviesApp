import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
        <NavLink exact to="/" className={styles.logo}>
          <img id="" src={Logo} alt="" />
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
      <div className={styles.SearchBar}>
        <SearchBar />
      </div>
    </header>
  );
}
