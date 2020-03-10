/*

http://www.omdbapi.com/
---
API_KEY=63f2c511

endpoint
---
http://www.omdbapi.com/?apikey=63f2c511&s=princess
    where s=[searchterm]

source
---
https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

*/

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Header from './components/layout/Header';
import Search from './components/Search';
import Movies from './components/Movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  const setChange = event => {
    setTerm(event.target.value);
  }
  const handleSubmit = async (event, term) => {
    event.preventDefault();

    try {
      let res = await axios.get(`http://www.omdbapi.com/?apikey=63f2c511&s=${term}`);
      return setMovies([...res.data.Search]);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <form onSubmit={(event) => handleSubmit(event, term)}>
        <input type="text" placeholder="test" onChange={(event) => setChange(event)} />
        <input type="submit" value="Testing" />
      </form>
      <Header />
      <Search />
      <Movies movies={movies} />
    </div>
  );
}

export default App;