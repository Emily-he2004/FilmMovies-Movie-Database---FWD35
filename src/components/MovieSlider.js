import { Link } from "react-router-dom";
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
    className: "center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SliderArrows direction="right" />,
    prevArrow: <SliderArrows direction="left" />
  };
  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesData.map((movie, index) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className={index === slideIndex ? "slide slide-active" : "slide"}>
              <img
                src={`${IMAGE_URL_BASE}/original${movie.backdrop_path}`}
                alt={movie.title}
              />
              <h1>{movie.title}</h1>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSlider;
