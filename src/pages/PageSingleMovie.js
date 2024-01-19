import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatReleaseDate } from "../utilities/toolbelt";


const singleMovieData = {

}

function PageSingleMovie(){
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState();
    const [movieVideos, setMovieVideos] = useState([]);

    useEffect(() => {
        getMovieById(id)

        .then((data) => {
            console.log(data);
            setMovieData(data);
            setMovieVideos(youtubeTrailerVideos)
        })
        .catch((error) => {
            alert(error);
        })

    }, [id])

    return (
        <div className="single-movie-page">
            {movieData && (
                <>
                <h1>{movieData.title}</h1>
                <div>
                    <h2>{ formatReleaseDate }</h2>
                    <FavouriteButton />
                    <p>{movieData.overview}</p>
                    <div className="movie-trailers">
                        {movieVideos.length > 0 && (
                            <iframe>
                                width: "",
                                height: "",
                                title:{movieVideos[0].name},
                                src=""
                            </iframe>
                        )}
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default PageSingleMovie;