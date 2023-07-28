
const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', filterMovies);

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const movieDiv = document.createElement('div');
  movieDiv.classList.add('movie');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = `${movie.title} (${movie.year})`;

  titleElement.addEventListener('click', () => {
    const descriptionElement = movieDiv.querySelector('.description');
    if (descriptionElement.style.display === 'none') {
      descriptionElement.style.display = 'block';
    } else {
      descriptionElement.style.display = 'none';
    }
  });

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = movie.description;

  movieDiv.append(titleElement);
  movieDiv.append(descriptionElement);
  movieContainer.append(movieDiv);
}

function filterMovies() {
  const searchTerm = searchInput.value.toLowerCase();
  const movieDivs = document.querySelectorAll('.movie');

  for (let i = 0; i < movieDivs.length; i++) {
    const movieDiv = movieDivs[i];
    const titleElement = movieDiv.querySelector('.title');
    const title = titleElement.textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      movieDiv.style.display = 'block';
    } else {
      movieDiv.style.display = 'none';
    }
  }
}
