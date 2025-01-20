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
    <div className={`app-container ${searchQuery ? 'blurred' : ''}`}>
      <h1>ARI CINEMA.tv</h1>
      <input
        type="text"
        placeholder="Buscar película"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery === '' ? ( //si esta vacio muestra el mensaje
        <p>Escribe algo para comenzar a buscar</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <p>{movie.title}</p>
              <div className="genres">
                {Array.isArray(movie.genres)
                  ? movie.genres.map((genre) => (
                      <span key={genre.trim()} className="genre">{genre.trim()}</span>
                    ))
                  : typeof movie.genres === 'string' && movie.genres.split(',').map((genre) => (
                      <span key={genre.trim()} className="genre">{genre.trim()}</span> //en resumen trata los generos como un array y los divide
                                                                                       //creando varios individuales 
                    ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusquedaMEILI;