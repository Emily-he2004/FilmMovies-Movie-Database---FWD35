
const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";



function getPopularMovies(){

    // repeat the following for other movie categories:
    
    return fetch(`${API_ENDPOINT}/movie/popular`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((Response) => {
        if (!Response.ok){
            throw new Error("Network response not OK.");
        }
        return Response.json();
    })
    .catch((error) => {
        throw error;
    })
}

export { getPopularMovies };
