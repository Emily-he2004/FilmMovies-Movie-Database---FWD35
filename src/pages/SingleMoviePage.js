import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCredits, getTopCast } from "../utilities/api";
import { formatReleaseDate, filterVideos } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavouriteButton";
import "../sass/_single.scss";

function SingleMoviePage() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);
  const [posterPath, setPosterPath] = useState(null);
  const [director, setDirector] = useState("");
  const [topCast, setTopCast] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        console.log("Data", data);
        console.log("safs", data.videos.results);

        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
        setPosterPath(data.poster_path);
        return getMovieCredits(id);
      })
      .then((credits) => {
        setDirector(credits.director);
        return getTopCast(id);
      })
      .then((cast) => {
        setTopCast(cast);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);

  console.log("movieData", movieData);
  console.log("movieVideos", movieVideos);

  return (
    <article className="single-movie-page">
      {movieData && (
        <>
          {movieVideos.length > 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
              title={movieData.name}
            ></iframe>
          )}
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={movieData.title}
          />
          <div>
            <p>{(movieData.vote_average * 10).toFixed()}%</p>
            <FavouriteButton movieData={movieData} />
          </div>
          <h1>{movieData.title}</h1>
          <p><span>Genres: </span>{movieData.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < movieData.genres.length - 1 && ", "}
            </span>
          ))}</p>
          <p><span>Director: </span>{director}</p>
          <p><span>Released: </span>{formatReleaseDate(movieData.release_date)}</p>

          <p><span>Top Cast: </span>{topCast.map((actor, index) => (
            <span key={actor.id}>
              {actor.name}
              {index < topCast.length - 1 && ", "}
            </span>
          ))}
          </p>
          <p><span>Synopsis: </span>{movieData.overview}</p>
        </>
      )}
    </article>
  );
}

export default SingleMoviePage;
