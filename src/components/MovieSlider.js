import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import SliderArrows from "./SliderArrows.js";
import "../sass/_carousel.scss";

const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";

function MovieSlider({ moviesData }) {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    //dots: true,
    className: "center",
    centerMode: true, // centers current/middle movie poster
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SliderArrows direction="right" />,
    prevArrow: <SliderArrows direction="left" />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesData.map((movie, index) => (
          <div key={movie.id} className={index === slideIndex ? "slide slide-active" : "slide"}>
            <img
              src={`${IMAGE_URL_BASE}/w400${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSlider;