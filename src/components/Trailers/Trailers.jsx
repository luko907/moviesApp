import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Trailers.module.css";

export default function Trailer(props) {
  const [movieTrailer, setMovieTrailer] = useState([]);

  useEffect(() => {
    const url = `process.env.REACT_APP_API_TMDB_BASE_URL/${props.id}process.env.REACT_APP_VIDEOCF=process.env.REACT_APP_API_TMDB_API_KEY&language=en-US`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setMovieTrailer(
          resp.data.results
            .filter((item) => item.type === "Trailer")
            .slice(0, 2)
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [props.id]);
  return (
    <React.Fragment>
      {movieTrailer.length !== 0 && (
        <div>
          <div className={styles.trailer_span_div}>
            <span>Trailer{movieTrailer.length > 1 ? "s" : null}</span>
          </div>
          <div className={styles.video_responsive_container}>
            <div className={movieTrailer.length > 1 && styles.video_responsive}>
              {movieTrailer &&
                movieTrailer.map((x) => (
                  <iframe
                    className={movieTrailer.length <= 1 && styles.iframeAlt}
                    src={`https://www.youtube.com/embed/${x.key}`}
                    frameBorder="0"
                    key={x.key}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
