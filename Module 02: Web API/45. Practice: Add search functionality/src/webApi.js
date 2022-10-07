function movieCard(title, moviePosterUrl) {
    return `<div class="movieCardContainer"><img class="moviePoster" src="${moviePosterUrl}" alt="Poster of ${title} movie."><div class="movieInfoContainer"><p class="movieTitle">${title}</p></div></div>`;
}

function pagesNavigationButton(nextPage) {
    return `<button class="movieCatalogNavigationButton" onclick="renderMovieCatalog(${nextPage})">Load More</button>`;
}

export function insertMovieCard(title, moviePosterUrl) {
    document.getElementById('movieCatalogList').innerHTML +=
        movieCard(title, moviePosterUrl);
}

export function updateNavigationButton(nextPage) {
    document.getElementById('movieCatalogNavigation').innerHTML =
        pagesNavigationButton(nextPage);
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
