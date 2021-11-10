import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
import playLogo from "../../img/play-icon.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselRec(props) {
  const [similar, setSimilar] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      // eslint-disable-next-line
      onMove, // eslint-disable-next-line
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className={styles.right} onClick={() => onClick()} />;
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      // eslint-disable-next-line
      onMove, // eslint-disable-next-line
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className={styles.left} onClick={() => onClick()} />;
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_TMDB_BASE_URL}${props.id}/recommendations?api_key=${process.env.REACT_APP_API_TMDB_API_KEY}&language=en-US&page=2`;

    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const final = resp.data.results.filter(
          (v, i, a) =>
            a.findIndex((t) => t.id === v.id) === i &&
            v.poster_path !== null &&
            v.backdrop_path !== null &&
            v.overview !== null &&
            v.title !== null &&
            v.release_date !== "" &&
            v.release_date !== undefined
        );
        setSimilar(final);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [props.id]);
  return (
    <div>
      <div className={styles.similar_span_div}>
        <span>Recommended</span>
      </div>
      <Carousel
        renderButtonGroupOutside={true}
        centerMode={true}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customTransition="all 1000ms"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {similar &&
          similar.map((item, i) => (
            <div className={styles.movie} key={item.id}>
              <Link className={styles.link} to={`/movies/${item.id}`}>
                <div className={styles.movie_img}>
                  <img
                    className={styles.movie_posterimg}
                    src={baseUrl + item.poster_path}
                    alt=""
                  />
                  <div className={styles.div_play_icon}>
                    <img className={styles.play_icon} src={playLogo} alt="" />
                  </div>
                </div>
                <div className={styles.description_container}>
                  <div className={styles.description}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.year}>
                      {item.release_date.length > 4
                        ? item.release_date.slice(0, -6)
                        : item.release_date}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselRec;
