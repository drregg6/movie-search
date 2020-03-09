/*

http://www.omdbapi.com/
---
API_KEY=63f2c511

source
---
https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

*/

import React from 'react';
import './App.css';

// Components
import Header from './components/layout/Header';
import Search from './components/Search';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Movies />
    </div>
  );
}

export default App;