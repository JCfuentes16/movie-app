import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieHeader from "./MovieHeader";
import SearchBox from "./SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchBar, SetSearchBar] = useState("");

  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${SearchBar}&apikey=3cba4720`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        console.log("No movies found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMoviesRequest(SearchBar);
  }, [SearchBar]);

  return (
    <div className="app-container">
      <div className="header-container">
        <MovieHeader heading="Movies" />
        <SearchBox SearchBar={SearchBar} SetSearchBar={SetSearchBar} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
