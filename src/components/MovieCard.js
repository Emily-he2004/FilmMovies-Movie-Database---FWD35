

const defaultMovieData = {

}


function MovieCard({movieData = defailtMovieData}) {
    const imagePath = `${IMAGE_URL_BASE}/w185${movieData.backdrop.path}`;
    console.log(imagePath);

    return(
        <div className="movie-card">
            <img src={imagePath} alt={movieData.title} className="movie-card-image" />
            <div className="title-and-release">
                <h2 className="title">{movieData.title}</h2>
                <h3 className="release-date">{movieData.release_date}</h3>
            </div>
            <h4 className="vot-average">{movieData.vote_average.toFixed(1)}</h4>
            <button className="favourite">&#9829;</button>
        </div>
    )
}