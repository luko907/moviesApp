import React from "react";
import styles from "./SearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div>
      <form>
        <div className={styles.divContainer}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
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
