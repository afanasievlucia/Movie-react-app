import React, { useEffect, useState} from 'react'
import NavBar from './components/NavBar' 
import Movies from './components/Movies';


function App() {
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&#39";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getMovies(apiURL);
  }, [])

  async function getMovies (url) {
    const result = await fetch(url);
    const data = await result.json();
    setMovies(data.results);
  }

  useEffect(() => {
    if(search === '') {
      getMovies(apiURL)
    } else 
    getMovies(SEARCHAPI + search);
  },[search])
 
  return (
    <>
    <NavBar search={search} setSearch={setSearch}/>
    <Movies movies={movies}/>
    </>
  )
}

export default App