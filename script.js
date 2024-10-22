const apiKey = 'f1a529d2a0fbae65199fc5360a807700';  // Reemplaza con tu clave de API de TMDb
const baseURL = 'https://api.themoviedb.org/3';

document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value;
  if (query) {
    searchMovies(query);
  }
});

function searchMovies(query) {
  fetch(`${baseURL}/search/multi?api_key=${apiKey}&query=${query}&language=es`)
    .then(response => response.json())
    .then(data => {
      displayResults(data.results);
    })
    .catch(error => {
      console.error('Error al realizar la búsqueda:', error);
    });
}

function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';  // Limpiar resultados anteriores

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No se encontraron resultados</p>';
    return;
  }

  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    const title = item.title || item.name;  // Película o Serie
    const imageUrl = item.poster_path 
      ? `https://image.tmdb.org/t/p/w200${item.poster_path}` 
      : 'https://via.placeholder.com/200x300?text=No+Image';

    resultItem.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${item.release_date || item.first_air_date}</p>
    `;
    resultsContainer.appendChild(resultItem);
  });
}
