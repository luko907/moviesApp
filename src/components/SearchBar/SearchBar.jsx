import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getActual, getReset } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const [movieInfo, setMovieInfo] = useState("");
  let history = useHistory();

  function handleChange(e) {
    setMovieInfo(e.target.value);
  }
  function handleSubmit(e) {
    props.getReset();
    e.preventDefault();
    history.push("/");
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
          <div className={styles.icon}>
            <button type="submit" className={styles.icon_link}>
              <FontAwesomeIcon
                className={styles.magnify}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <input
            type="text"
            className={styles.input_search}
            placeholder="Search for movies and series . . ."
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
    getReset: () => dispatch(getReset()),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
