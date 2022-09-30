const movieSearchField = document.querySelector('#movieSearchField');
const resultMessage = document.querySelector('#resultMessage');
const movieCatalog = document.querySelector('#movieCatalog');
const movieCatalogLoadMoreButton = document.querySelector('#movieCatalogLoadMoreButton');

function movieCard(title, moviePosterUrl) {
    return (
        '<div class="movieCard">' +
            `<img class="moviePoster" src="${moviePosterUrl}">` +
            '<div class="movieInfo">' +
                `<p class="movieTitle">${title}</p>` +
            '</div>' +
        '</div>'
    );
}

export function insertMovieCard(title, moviePosterUrl) {
    movieCatalog.innerHTML += movieCard(title, moviePosterUrl);
}

export function showResultsMessage(message) {
    resultMessage.textContent = message;
    resultMessage.classList.remove('invisible');
}

export function showLoadMoreButton() {
    movieCatalogLoadMoreButton.classList.remove('invisible');
}

export function hideLoadMoreButton() {
    movieCatalogLoadMoreButton.classList.add('invisible');
}

export function clearMovieCatalog() {
    movieSearchField.value = '';
    movieCatalog.innerHTML = '';
    hideLoadMoreButton();
}
