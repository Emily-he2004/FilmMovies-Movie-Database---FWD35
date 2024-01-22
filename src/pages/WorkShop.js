import MovieCard from "../components/MovieCard";

function WorkShop() {
  return (
    <div>
      <h2>Workshop</h2>
      <MovieCard />
    </div>
  );
}

export default WorkShop;

// Plan for AppRouter.js:
// import { Route, Router, Routes } from "react-router-dom";

// return (
//     <div>
//         <Router>
//             <Header />
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/" element={<AboutPage />} />
//                     <Route path="/" element={<FavouritePage />} />
//                     <Route path="/" element={<SingleMoviePage />} />

// How do we load the search results? in a
// new page upon search submit (onClick)?

//                     <Route path="/" element={<SearchResultPage />} />

//                 </Routes>
//             <Footer />
//         </Router>
//     </div>
// )

// Plan for Header.js:
// return (
//     <div>
//         <NavBar />
//         <SearchBar />
//     </div>
// )

// Plan for Navbar.js:
// return (
//     <div>
//         <div>
//             <a>
//                 <img className="full-logo"
//                     // movie app LOGOS - both full and mini versions go HERE.
//                     // Links to "HomePage" <Route />
//                     // Need to only show ONE of 2 logos depending on screen size.
//                 />
//                 <img className="mini-logo"/>
//             </a>
//         </div>
//         {/* Does the button need it's own <div> or
//         Can it go inside menu list's <div>? */}
//         <div>
//         <button>
//             <img
//                 button image goes here
//             />
//         </button>
//             <ul>
//                 <li>About</li>
//                 <li>Favourites</li>
//             </ul>
//         </div>

//         Search bar must go inside <Header />
//         <SearchBar />
//     </div>
// )

// Plan for Footer.js:
// return (
//     <div>
//         <div>
//             <a>
//                 <img className="full-logo"
//                     // movie app LOGOS - both full and mini versions go HERE.
//                     // Links to "HomePage" <Route />
//                     // Need to only show ONE of 2 logos depending on screen size.
//                 />
//                 <img className="mini-logo"/>
//             </a>
//         </div>
//         <div>
//             <ul>
//                 <li>About</li>
//                 <li>Favourites</li>
//             </ul>
//         </div>
//     </div>
// )
