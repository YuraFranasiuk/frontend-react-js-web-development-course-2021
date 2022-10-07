const navigation = document.querySelector('#navigation')

const moviesList = document.querySelector('#moviesList');
const moviesLoadMoreButton = document.querySelector('#moviesLoadMoreButton');

function movieCard({ id, title, poster, inBookmarks = false }) {
    return (
        `<div class="movie-card" data-movie-id="${id}">` +
            '<div class="movie-card__poster">' +
                `<img src="${poster}">` +
            '</div>' +
            '<div class="movie-card__info">' +
                '<div class="movie-card__bookmark-button">' +
                    `<i class="fa-heart fa-xl ${inBookmarks ? 'fa-solid ' : 'fa-regular'}"></i>` +
                '</div>' +
                `<p class="movie-card__title">${title}</p>` +
            '</div>' +
        '</div>'
    );
}

export class NoImplementedError extends Error {}

export const pageRenders = {
    popularMoviesPage: (page = 1) => { throw new NoImplementedError(); },
    bookmarksPage: (page = 1) => { throw new NoImplementedError(); },
}

let currentPageNumber = 1;
let currentPage = null;
let renderPageFunction = (page = 1) => {
    currentPage = 'popularMoviesPage';
    pageRenders.popularMoviesPage(page);
};

export function appendMovieToList({ id, title, poster, inBookmarks = false }) {
    moviesList.innerHTML += movieCard({ id, title, poster, inBookmarks });
}

export function clearMoviesList() {
    currentPageNumber = 1;
    moviesList.innerHTML = '';
    hideMoviesLoadMoreButton();
}

export function showMoviesLoadMoreButton() {
    moviesLoadMoreButton.classList.remove('hidden');
}

export function hideMoviesLoadMoreButton() {
    moviesLoadMoreButton.classList.add('hidden');
}

navigation.addEventListener('click', (evt) => {
    const selectedNavigationItem = evt.target.closest('.navigation__item');

    if (selectedNavigationItem === null) {
        return;
    }

    clearMoviesList();

    currentPage = selectedNavigationItem.id;
    currentPageNumber = 1;
    renderPageFunction = pageRenders[currentPage];
    renderPageFunction(currentPageNumber);

    evt.stopPropagation();
});

moviesList.addEventListener('click', (evt) => {
    const bookmarkButton = evt.target.closest('.movie-card__bookmark-button i');

    if (bookmarkButton === null) {
        return;
    }

    const movieCard = evt.target.closest('.movie-card');

    let movieBookmarks = JSON.parse(sessionStorage.getItem('movieBookmarks') || '[]');

    if (bookmarkButton.attributes.class.textContent.includes('fa-regular')) {
        movieBookmarks.push({
            id: movieCard.dataset.movieId,
            title: movieCard.querySelector('.movie-card__title').textContent,
            poster: '/' + movieCard.querySelector('.movie-card__poster img')
                .attributes.src.textContent.split('/').at(-1),
        });
    } else {
        movieBookmarks = movieBookmarks.filter(
            (movie) => movie.id !== movieCard.dataset.movieId
        );
    }

    sessionStorage.setItem('movieBookmarks', JSON.stringify(movieBookmarks));

    if (currentPage === 'bookmarksPage') {
        movieCard.remove();
    } else {
        bookmarkButton.classList.toggle('fa-solid');
        bookmarkButton.classList.toggle('fa-regular');
    }
});

moviesLoadMoreButton.addEventListener('click', (evt) => {
    currentPageNumber += 1;
    renderPageFunction(currentPageNumber);
});
