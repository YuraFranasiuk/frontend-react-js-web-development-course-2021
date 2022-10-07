import api from './api.js';
import * as webApi from './webApi.js';

const movieSearchForm = document.querySelector('#movieSearchForm');
const movieCatalogLoadMoreButton = document.querySelector('#movieCatalogLoadMoreButton');

let movie = null;
let page = 1;

movieSearchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    if (!data.get('movie')) {
        return;
    }

    movie = data.get('movie');
    page = 1;

    webApi.clearMovieCatalog();
    renderMovieCatalogPage(movie, page);
});

movieCatalogLoadMoreButton.addEventListener('click', (evt) => {
    page += 1;

    renderMovieCatalogPage(movie, page);
});

async function renderMovieCatalogPage(movie, page) {
    const pageData = await api.fetchMoviesBySearchText(movie, page);
    if (pageData.total_results) {
        webApi.showResultsMessage(`Results (${pageData.total_results})`)
    } else {
        webApi.showResultsMessage(`No results for (${movie})`);

        return;
    }

    pageData.results.forEach((movie) => {
        webApi.pushMovieCard(
            movie.original_title, api.create_poster_url(movie.poster_path)
        );

        if (pageData.total_pages === pageData.page) {
            webApi.hideLoadMoreButton();
        } else {
            webApi.showLoadMoreButton();
        }
    });
}
