import { IMAGE_URL_BASE } from "../utilities/api";
import { useNavigate } from "react-router-dom";
import { formatReleaseDate, truncateText, convertToHoursAndMinutes } from "../utilities/toolbelt";
import { getMovieById } from "../utilities/api";
import { useState, useEffect } from "react";
import FavouriteButton from "./FavouriteButton";
import noPosterImage from "../media/no-poster.png";

const defaultMovieData = {
  adult: false,
  backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
  genre_ids: [878, 12, 28],
  id: 609681,
  original_language: "en",
  original_title: "The Marvels",
  overview:
    "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
  popularity: 2186.428,
  poster_path: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
  release_date: "2023-11-08",
  title: "The Marvels",
  video: false,
  vote_average: 6.342,
  vote_count: 1067,
};

function MovieCard({ movieData = defaultMovieData }) {
  const navigate = useNavigate();
  const [runtime, setRuntime] = useState(null);

  useEffect(() => {
    getMovieById(movieData.id)
      .then((data) => {
        setRuntime(data.runtime);
      })
      .catch((error) => {
        console.error("Error fetching movie runtime:", error);
      });
  }, [movieData.id]);

  let imagePath;
  if (movieData.poster_path) {
    imagePath = `${IMAGE_URL_BASE}/w500${movieData.poster_path}`;
  } else {
    imagePath = noPosterImage;
  }

  return (
    <article className="movie-card">
      <div className="movie-hover">
        <img
          src={imagePath}
          alt={movieData.title}
          className="movie-card-image"
        />
        <div className="movie-hidden-info">
          <div>
            <p className="vote-average">
              {(movieData.vote_average * 10).toFixed()}%
            </p>
            <FavouriteButton movieData={movieData} />
          </div>
          <p>{truncateText(movieData.overview, 125)}</p>
          <button
            onClick={() => {
              navigate(`/movie/${movieData.id}`);
            }}
            className="more-info"
          >
            More Info
          </button>
        </div>
      </div>
      <div className="title-and-release">
        <p className="release-date">
          {formatReleaseDate(movieData.release_date)}
        </p>
        <p>{convertToHoursAndMinutes(runtime)}</p>
      </div>
      <h3
        onClick={() => {
          navigate(`/movie/${movieData.id}`);
        }}
        className="title"
      >
        {truncateText(movieData.title, 20)}
      </h3>
    </article>
  );
}

export default MovieCard;
