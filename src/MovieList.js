import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
