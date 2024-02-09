import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCredits, getTopCast } from "../utilities/api";
import { formatReleaseDate, filterVideos } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavouriteButton";
import "../sass/_singlePage.scss";
import noPosterImage from "../media/no-poster.png";

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


  return (
    <article className="single-movie-page">
      {movieData && (
        <>
          <section className="single-info-1">
            {movieVideos.length > 0 && (
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                title={movieData.name}
              ></iframe>
            )}
            {posterPath ? (
              <img
                className="single-poster"
                src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                alt={movieData.title}
              />
            ) : (
              <img
                className="single-poster"
                src={noPosterImage}
                alt="No Poster Available"
              />
            )}
            <div className="single-rating-fav">
              <p>{(movieData.vote_average * 10).toFixed()}%</p>
              <FavouriteButton movieData={movieData} />
            </div>
          </section>
          <section className="single-info-2">
            {movieVideos.length > 0 && (
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                title={movieData.name}
              ></iframe>
            )}
            <h1>{movieData.title}</h1>
            <p><span className="single-info-type">Genres: </span>
              {movieData.genres.slice(0, 3).map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < 2 && ", "}
                </span>
              ))}
              {movieData.genres.length > 3}
            </p>

            <p><span className="single-info-type">Director: </span>{director}</p>
            <p><span className="single-info-type">Released: </span>{formatReleaseDate(movieData.release_date)}</p>

            <p id="top-cast-border"><span className="single-info-type">Top Cast: </span>{topCast.map((actor, index) => (
              <span key={actor.id}>
                {actor.name}
                {index < topCast.length - 1 && ", "}
              </span>
            ))}
            </p>
            <p id="synopsis-info"><span className="single-info-type">Synopsis: </span>{movieData.overview}</p>
          </section>
        </>
      )}
    </article>
  );
}

export default SingleMoviePage;
