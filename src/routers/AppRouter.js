import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
// ---------------------- //
import Header from "../components/Header";
// ---------------------- //
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FavouritesPage from "../pages/FavouritesPage";
// ---------------------- //
import SingleMoviePage from "../pages/SingleMoviePage";
// ---------------------- //
import SearchResultPage from "../pages/SearchResultPage";
import PageNotFound from "../pages/PageNotFound";
// ---------------------- //
import WorkShop from "../pages/WorkShop";
// ---------------------- //
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        {/* <SearchResultPage
        // allMovieData={allMovieData}
        // loading={loading}
        /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="/movie/:id" element={<SingleMoviePage />} />

          {/* <SearchBar /> */}
          {/* <Route path="/search-results" element={<SearchResultPage />} /> */}
          <Route path="/page-not-found" element={<PageNotFound />} />

          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
