# 🎬 ARI CINEMA.tv  

ARI CINEMA.tv es una aplicación de búsqueda que utiliza **MeiliSearch** para ofrecer resultados rápidos y relevantes sobre películas.  

---

## 🚀 Funcionalidades  

- **Búsqueda en tiempo real:** Encuentra películas rápidamente con un motor optimizado.  
- **Filtros avanzados:** Busca por título y géneros.  
- **Interfaz simple y elegante:** Diseñado para facilitar el uso.  

---

## 🛠️ Instalación  

### 1. Requisitos previos  
- Una **VPS** (Virtual Private Server) configurada.  
- **Docker** instalado en la VPS.  

### 2. Instalar Docker  
Ejecuta los siguientes comandos en tu VPS:  
```bash
sudo apt update  
sudo apt install docker.io -y  
sudo systemctl start docker  
sudo systemctl enable docker  
3. Configurar MeiliSearch
Descarga e inicia MeiliSearch utilizando Docker:

bash
Copy
Edit
docker run -d --name meilisearch -p 7700:7700 getmeili/meilisearch:latest  
4. Configurar API Key (Opcional)
Si deseas añadir una clave de acceso:

bash
Copy
Edit
docker run -d --name meilisearch -p 7700:7700 -e MEILI_MASTER_KEY='TU_API_KEY' getmeili/meilisearch:latest  
Reemplaza TU_API_KEY con tu clave personalizada.

🖥️ Configuración del proyecto
1. Instalar dependencias
Asegúrate de tener Node.js instalado. Luego, ejecuta:

bash
Copy
Edit
npm install  
2. Iniciar el proyecto
Inicia el servidor local con:

bash
Copy
Edit
npm start  
🧩 Estructura básica del código
Conexión a MeiliSearch
En el archivo principal, configuramos el cliente de MeiliSearch:

javascript
Copy
Edit
const client = new MeiliSearch({  
  host: 'http://<IP_DE_TU_VPS>:7700',  
  apiKey: '<TU_API_KEY>',  
});  
host: Dirección de tu VPS.
apiKey: Clave configurada (si aplica).
Búsqueda de películas
La búsqueda se realiza con la siguiente lógica:

javascript
Copy
Edit
const response = await index.search(searchQuery);  
setSearchResults(response.hits);  
Mensaje si no hay búsqueda
Se muestra un mensaje amigable cuando no se introduce texto:

javascript
Copy
Edit
{searchQuery === '' ? (  
  <p>Escribe algo para comenzar a buscar</p>  
) : (  
  <ul>  
    {searchResults.map((movie) => (  
      <li key={movie.id}>  
        <p>{movie.title} - {movie.genres}</p>  
      </li>  
    ))}  
  </ul>  
)}  
