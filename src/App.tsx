//EJEMPLO DE LA DOCUMENTACION
//FUENTE: https://www.meilisearch.com/docs/guides/front_end/react_quick_start
import React, { useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import 'instantsearch.css/themes/satellite.css';

const client = new MeiliSearch({
  host: 'http://18.227.13.140', 
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
});

const busqueda = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = async () => {
    const index = client.index('movies'); 
    const response = await index.search(searchQuery); 
    setSearchResults(response.hits); 
  };

  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

export default App;