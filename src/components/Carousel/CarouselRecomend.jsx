import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Carousel.module.css";
/* import { Link } from "react-router-dom"; */

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
    const url =
      "https://api.themoviedb.org/3/movie/580489/similar?api_key=715369ad83702bbb01d37884acb031ed&language=en-US&page=1";
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
  }, []);
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
          similar.map((item) => (
            <div>
              <img
                className={styles.similiar_img}
                src={baseUrl + item.poster_path}
                alt=""
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselRec;
