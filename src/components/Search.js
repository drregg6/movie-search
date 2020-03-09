import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const Search = (props) => {
  const [ input, setInput ] = useState({
    term: ""
  });
  const { term } = useState;

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log(input);
    setInput({ ...input, term: "" });
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search for a movie"
          name="term"
          value={term}
          onChange={event => handleChange(event)}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>
    </>
  )
}

// Search.propTypes = {

// }

export default Search;