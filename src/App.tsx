import React, { useState, useEffect } from 'react';
import { MeiliSearch } from 'meilisearch';
import './App.css';

const client = new MeiliSearch({
  host: 'http://18.227.13.140',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
});

const BusquedaMEILI = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const busquedayresultados = async () => {
      const index = client.index('movies');
      const response = await index.search(searchQuery);
      setSearchResults(response.hits);
    };

    if (searchQuery) {
      busquedayresultados();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className={`app-container ${searchResults.length > 0 ? 'results-visible' : ''}`}>
      <h1>ARI CINEMA.tv</h1>
      <input
        type="text"
        placeholder="Buscar película"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery === '' ? ( //si esta vacio muestra el mensaje de abajo
        <p>Escribe algo para comenzar a buscar</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" /> 
              <p>{movie.title} - {movie.genres}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusquedaMEILI;