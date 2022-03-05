import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) {
        throw new Error('Something went wrong !');
      }

      const data = await response.json();
      const movieDataFromApi = data.results.map(data => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          realeaseDate: data.realease_date,
        };
      });
      setMovies(movieDataFromApi);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       const movieDataFromApi = data.results.map(data => {
  //         return {
  //           id: data.episode_id,
  //           title: data.title,
  //           openingText: data.opening_crawl,
  //           realeaseDate: data.realease_date,
  //         };
  //       });
  //       setMovies(movieDataFromApi);
  //     });

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
