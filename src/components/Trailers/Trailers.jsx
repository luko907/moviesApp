import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Trailers.module.css";

export default function Trailer(props) {
  const [movieTrailer, setMovieTrailer] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=715369ad83702bbb01d37884acb031ed&language=en-US`;
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
            <span>Trailers</span>
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
