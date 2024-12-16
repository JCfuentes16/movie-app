import React from "react";

const MovieList = ({ movies, onPosterClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} onClick={() => onPosterClick(movie)} className="movie-item">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
