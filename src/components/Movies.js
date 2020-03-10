import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  
  return (
    <div>
      { movies.map(movie => <p>{ movie.Title }</p>) }
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array
}

export default Movies;