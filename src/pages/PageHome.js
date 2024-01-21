import { useEffect, useState } from "react";



function PageHome(){
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then((data) =>{
                setPopularMovies(data.results);
            })
            .catch((error) =>{
                alert(error);
            });
    }, []);

    console.log(popularMovies);

    return(
        <main id="home">
            <h2>Home test</h2>
            <MoviesContainer title="Popular Movies" moviesData />
        </main>
    );
}

export default PageHome;