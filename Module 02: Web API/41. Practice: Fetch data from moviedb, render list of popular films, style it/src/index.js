import api from './api.js';
import * as webApi from './webApi.js'

import { asyncProvider } from "./helpers.js";

window.renderMovieCatalog = (page) => {
    asyncProvider(async () => {
        const moviesPage = await api.fetchPopularMovies(page);
        moviesPage.results.forEach(movie => {
            webApi.pushMovieCard(
                movie.original_title,
                `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            );
        });

        webApi.updateLoadMoreButton(page + 1);
    });
};

window.onload = () => {
    window.renderMovieCatalog(1);
};
