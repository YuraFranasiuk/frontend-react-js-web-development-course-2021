const movieCatalog = document.querySelector('#movieCatalog');
const movieCatalogLoadMore = document.querySelector('#movieCatalogLoadMore');

function movieCard(title, moviePosterUrl) {
    return (
        '<div class="movieCard">' +
            '<div class="moviePoster">' +
                `<img src="${moviePosterUrl}">` +
            '</div>' +
            '<div class="movieInfo">' +
                `<p class="movieTitle">${title}</p>` +
            '</div>' +
        '</div>'
    );
}

function loadMoreButton(page = 1) {
    return `<button onclick="renderMovieCatalog(${page})">Load More</button>`;
}

export function pushMovieCard(title, moviePosterUrl) {
    movieCatalog.innerHTML += movieCard(title, moviePosterUrl);
}

export function updateLoadMoreButton(page) {
    movieCatalogLoadMore.innerHTML = loadMoreButton(page);
}

export const fetchStart = new Event('fetchStart', {
    view: document,
    bubbles: true,
    cancelable: false
});

export const fetchEnd = new Event('fetchEnd', {
    view: document,
    bubbles: true,
    cancelable: false
});

document.addEventListener('fetchStart', () => {
    document.getElementById("loader").classList.add("shown");
});
document.addEventListener('fetchEnd', () => {
    document.getElementById("loader").classList.remove("shown");
});
