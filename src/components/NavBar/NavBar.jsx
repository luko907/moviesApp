import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo-principal-Web.svg";
import SearchBar from "../SearchBar/SearchBar";
import { getMovies } from "../../actions";
import { connect } from "react-redux";

function NavBar(props) {
  return (
    <header /*  className={styles.header} */>
      <div className={styles.linkContainer}>
        <NavLink exact to="/" className={styles.logo}>
          <img id="" src={Logo} alt="" />
        </NavLink>
      </div>
      <div className={styles.link_movies_searchbar}>
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  mov: state.moviesLoaded,
});

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
