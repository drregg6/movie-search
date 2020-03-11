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

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Header from './components/layout/Header';
import Search from './components/Search';
import Movies from './components/Movies';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event, term) => {
    event.preventDefault();
    const searchTerm = term.term;

    try {
      let res = await axios.get(`http://www.omdbapi.com/?apikey=63f2c511&s=${searchTerm}`);
      console.log(res.data);
      return setMovies([...res.data.Search]);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <Header />
      <Search handleSubmit={handleSubmit} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;