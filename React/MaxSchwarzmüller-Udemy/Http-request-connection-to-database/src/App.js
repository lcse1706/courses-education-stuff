import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://test-3abc0-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong !');
      }

      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // const movieDataFromApi = data.results.map(data => {
      //   return {
      //     id: data.episode_id,
      //     title: data.title,
      //     openingText: data.opening_crawl,
      //     realeaseDate: data.realease_date,
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  async function addMovieHandler(movie) {
    const response = await fetch(
      'https://test-3abc0-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
