import api from './api.js';
import * as webApi from './webApi.js'

import { asyncProvider } from "./helpers.js";

window.renderMovieCatalog = (page) => {
    asyncProvider(async () => {
        const moviesPage = await api.fetchPopularMovies(page);
        moviesPage.results.forEach(movie => {
            webApi.insertMovieCard(
                movie.original_title,
                `http://image.tmdb.org/t/p/w500${movie.poster_path}`
            );
        });

        webApi.updateNavigationButton(page + 1);
    });
};

window.onload = () => {
    window.renderMovieCatalog(1);
};
