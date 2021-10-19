import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div>
      <form>
        <input
          type="text"
          className={styles.input_search}
          placeholder="Encuentra películas, series y más"
        />
      </form>
    </div>
  );
}
