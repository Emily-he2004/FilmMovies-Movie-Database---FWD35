import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { formatReleaseDate, filterVideos } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavouriteButton";
import "../sass/_single.scss";
// const singleMovieData = {
//   adult: false,
//   backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
//   genre_ids: [878, 12, 28],
//   id: 609681,
//   original_language: "en",
//   original_title: "The Marvels",
//   overview:
//     "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
//   popularity: 2186.428,
//   poster_path: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
//   release_date: "2023-11-08",
//   title: "The Marvels",
//   video: false,
//   vote_average: 6.342,
//   vote_count: 1067,
// };

// the structure of the response results (array of objects):

// const defaultMovieData = {
//   adult: boolean, // false,
//   backdrop_path: string,// "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
//   genre_ids: 'array of integers', // [878, 12, 28],
//   id: integer, // 609681,
//   original_language: string, // "en",
//   original_title: string, // "The Marvels",
//   overview: string, // "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
//   popularity: Number, // 2186.428,
//   poster_path: string, // "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
//   release_date: string, //  "2023-11-08",
//   title: string, // "The Marvels",
//   video: boolean, //  false,
//   vote_average: Number, // 6.342,
//   vote_count: integer, // 1067,
// };

function SingleMoviePage() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        console.log("Data", data);
        console.log("safs", data.videos.results);

        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  console.log("movieData", movieData);
  console.log("movieVideos", movieVideos);

  return (
    <div className="single-movie-page">
      {movieData && (
        <>
          <h1>{movieData.title}</h1>
          <div>
            <h3>{formatReleaseDate(movieData.release_date)}</h3>
            <FavouriteButton movieData={movieData} />

            <p>{movieData.overview}</p>

            <div className="movie-trailers">
                <h2>Video supposed to be here but it's not</h2>
              {movieVideos.length > 0 && (
                <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                width="600"
                height="600"
                title={movieData.name}
                ></iframe>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleMoviePage;
