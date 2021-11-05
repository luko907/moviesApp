import React from "react";
import styles from "./Trailers.module.css";

export default function Trailer() {
  return (
    <React.Fragment>
      <div className={styles.video_responsive_container}>
        <div className={styles.video_responsive}>
          <iframe
            src={`https://www.youtube.com/embed/ktvTqknDobU`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <iframe
            src={`https://www.youtube.com/embed/ktvTqknDobU`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
