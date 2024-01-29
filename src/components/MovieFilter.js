// import { useEffect, useState } from "react";

function MovieFilter({ filter, setFilter }) {
  return (
    <div className="movieCategories">
      <ul>
        <li>
          <button className="filterBtn" onClick={() => setFilter("popular")}>Popular</button>
        </li>
        <li>
          <button className="filterBtn" onClick={() => setFilter("top_rated")}>Top-Rated</button>
        </li>
        <li>
          <button className="filterBtn" onClick={() => setFilter("now_playing")}>Now Playing</button>
        </li>
        <li>
          <button className="filterBtn" onClick={() => setFilter("upcoming")}>Upcoming</button>
        </li>
      </ul>
    </div>
  );
}

export default MovieFilter;