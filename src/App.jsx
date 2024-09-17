import React, { useState, useEffect } from 'react';
import fetchPopularMovies, { IMAGE_BASE_URL } from './apiService';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchPopularMovies();
        setMovies(response.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <h1>Filmes Populares</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            {movie.poster_path && (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={`Poster de ${movie.title}`}
                style={{ width: '200px' }}
              />
            )}
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
