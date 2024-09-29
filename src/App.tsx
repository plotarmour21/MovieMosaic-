import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchBar from "./components/search-bar";
import MovieGrid from "./components/movie-grid";
import MovieDetails from "./components/movie-details";
import { env } from "process";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY as string; // Ensure correct type
    const BASE_URL = "https://api.themoviedb.org/3";
    const endpoint = searchQuery
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      } else {
        setMovies([]); // Clear movies if no results
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Optionally clear movies on error
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-center">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={handleSearch} />
                  <MovieGrid movies={movies} />
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
