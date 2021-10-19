import React from "react";
import styles from "./SearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div>
      <form>
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
          />
        </div>
      </form>
    </div>
  );
}
