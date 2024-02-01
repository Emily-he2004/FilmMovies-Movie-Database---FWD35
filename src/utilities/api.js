import { useEffect } from "react";

const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";

function getPopularMovies() {
  return fetch(`${API_ENDPOINT}/movie/popular`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not OK.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getTopRatedMovies() {
  return fetch(`${API_ENDPOINT}/movie/top_rated`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not OK.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getNowPlayingMovies() {
  return fetch(`${API_ENDPOINT}/movie/now_playing`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not OK.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getUpcomingMovies() {
  return fetch(`${API_ENDPOINT}/movie/upcoming`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not OK.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieById(movieId) {
  return fetch(`${API_ENDPOINT}/movie/${movieId}?append_to_response=videos`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieCredits(movieId) {
  return fetch(`${API_ENDPOINT}/movie/${movieId}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      return {
        director: findDirector(data.crew),
        cast: data.cast,
      };
    })
    .catch((error) => {
      throw error;
    });
}

function findDirector(crew) {
  const director = crew.find((member) => member.job === "Director");
  return director ? director.name : "Director not found";
}

function getTopCast(movieId) {
  return fetch(`${API_ENDPOINT}/movie/${movieId}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      return data.cast.slice(0, 3);
    })
    .catch((error) => {
      throw error;
    });
}

// const getMovieRequest = async () => {
//   // return fetch(`${API_ENDPOINT}/search/movie?include_adult=false&language=en-CA&query=${search_input}`, {
//   // // return fetch(`${API_ENDPOINT}/search?include_adult=false&language=en-CA&query=${search_input}`, {
//   //   // https://www.themoviedb.org/search?language=en-CA&query=test
//   //   headers: {
//   //     accept: "application/json",
//   //     Authorization: `Bearer ${API_TOKEN}`,
//   //   },

//     const searchURL = `${API_ENDPOINT}/search?${searchMovie}&language=en-CA`;
//     const response = await fetch(searchURL);
//     const responseJson = await response.json();

//   }


export {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  IMAGE_URL_BASE,
  getMovieById,
  getMovieCredits,
  getTopCast
};
