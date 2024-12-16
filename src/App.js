import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieHeader from "./Components/MovieHeader";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchTitle}&apikey=3cba4720`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
        localStorage.setItem("movies", JSON.stringify(responseJson.Search));
      } else {
        console.log("No movies found");
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
  
    const savedMovies = JSON.parse(localStorage.getItem("movies"));
    if (savedMovies && savedMovies.length > 0) {
      setMovies(savedMovies);
    }
  }, []); 

  useEffect(() => {
    if (searchTitle) {
      getMoviesRequest();
    }
  }, [searchTitle]);

  const IfPosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeDescription = () => {
    setSelectedMovie(null); 
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <MovieHeader heading="Movies" />
        <SearchBar searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      </div>
      <MovieList movies={movies} onPosterClick={IfPosterClick} />
      {selectedMovie && (
        <div className="movie-description">
          <button onClick={closeDescription} className="close-button">
            Close
          </button>
          <h2>{selectedMovie.Title}</h2>
          <p>Year: {selectedMovie.Year}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </div>
      )}
    </div>
  );
};

export default App;
