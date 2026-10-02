const API_KEY = "66a5d90a3ae41899035c328cab719619";

const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", searchMovies);

async function searchMovies() {
  const query = searchBox.value;
  if (!query) return;

  results.innerHTML = "Loading...";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();

  results.innerHTML = "";

  for (const movie of data.results) {
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : "https://via.placeholder.com/300x450?text=No+Poster";

    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title}">
      <p>${movie.title}</p>
    `;
    results.appendChild(div);
  }
}