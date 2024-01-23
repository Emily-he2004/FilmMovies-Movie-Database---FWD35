import { useEffect, useState } from "react";

function MovieFilter({ filter, setFilter }) {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setFilter("popular")}>Popular</button>
        </li>
        <li>
          <button onClick={() => setFilter("top_rated")}>Top-Rated</button>
        </li>
        <li>
          <button onClick={() => setFilter("now_playing")}>Now Playing</button>
        </li>
        <li>
          <button onClick={() => setFilter("upcoming")}>Upcoming</button>
        </li>
      </ul>
    </div>
  );
}

export default MovieFilter;