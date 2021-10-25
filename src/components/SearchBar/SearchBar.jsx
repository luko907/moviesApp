import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getActual } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const [movieInfo, setMovieInfo] = useState("");
  let history = useHistory();

  function handleChange(e) {
    setMovieInfo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    history.push("/movies");
    props.getActual(movieInfo);
    setMovieInfo("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.divContainer}>
          <Link to="/search">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </Link>
          <input
            type="text"
            className={styles.input_search}
            placeholder="Encuentra películas, series y más"
            value={movieInfo}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getActual: (title) => dispatch(getActual(title)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
