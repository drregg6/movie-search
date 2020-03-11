import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  
  return (
    <div className="movies">
      { 
        movies.map(movie => {
          return (
            <div key={ movie.imdbID } className="movie">
              <h1>{ movie.Title }</h1>
              <img src={ movie.Poster } alt={  movie.Title } />
            </div>
          )
        })
      }
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array
}

export default Movies;