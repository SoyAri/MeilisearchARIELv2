import { MeiliSearch } from 'meilisearch';

const conexion = new MeiliSearch({
  host: 'http://18.217.121.60',//ipv4 publica VPS 1
  apiKey: 'b403bf62a797c2774542c7b6bc114125c6ca9aa5124507cc38b8fbfb8387'//API Key VPS 1
});

export default conexion;