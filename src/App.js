import React, { useState} from 'react';
//dfa70bc0
import './App.css'
import './search.svg'
import { useEffect } from 'react';
import MovieCard from './MovieCard';


const API_URL ='http://www.omdbapi.com?apikey=dfa70bc0';
const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

useEffect(()=>{
  searchMovies('Spiderman')

},[]);

  return (
    <>
    <div className='app'>
      <h1>MovieLand</h1>
     

     <div className='search'>
      <input 
      placeholder='Search for movies'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)} 
      />
      <img 
      src='./search.svg'
      alt="search"
      onClick ={() => searchMovies(searchTerm)}
      />
     </div>
     {movies?.length > 0 
      ? (
        <>
        <div className="container">
          {movies.map((movie)=> (
            <MovieCard movie = {movie} />
          ))}
        </div> 
        
        </>
        

      ) : (
        <>
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
        </>
      )
      


     }

     


    </div>
    </>
     
  );
}

export default App;
