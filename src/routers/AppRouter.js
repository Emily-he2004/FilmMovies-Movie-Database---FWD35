import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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

function AppRouter() {
  return (
    <BrowserRouter>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="/movie/:id" element={<SingleMoviePage />} />

          <Route path="/search-results" element={<SearchResultPage />} />
          <Route path="/page-not-found" element={<PageNotFound />} />

          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
        <Footer />
      </Router>
    </BrowserRouter>
  );
}

export default AppRouter;
