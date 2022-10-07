import api from './api.js';
import * as webApi from './webApi.js';

webApi.pageRenders.popularMoviesPage = async (page = 1) => {
    webApi.hideMoviesLoadMoreButton();

    const pageData = await api.fetchPopularMovies(page);
    const movieBookmarks = JSON.parse(sessionStorage.getItem('movieBookmarks') || '[]');
    pageData.results.forEach((movie) => {
        webApi.appendMovieToList({
            id: movie.id, title: movie.title,
            poster: api.create_poster_url(movie.poster_path),
            inBookmarks: Boolean(movieBookmarks.find((_movie) => Number(_movie.id) === movie.id))
        })
    });

    if (pageData.page === pageData.total_pages)
        webApi.hideMoviesLoadMoreButton();
    else
        webApi.showMoviesLoadMoreButton();
};

webApi.pageRenders.bookmarksPage = (page = 1) => {
    webApi.hideMoviesLoadMoreButton();

    const movieBookmarks = JSON.parse(sessionStorage.getItem('movieBookmarks') || '[]');
    movieBookmarks.forEach((movie) => {
        webApi.appendMovieToList({
            id: movie.id, title: movie.title,
            poster: api.create_poster_url(movie.poster),
            inBookmarks: true
        })
    });
}

(async () => {
    await webApi.pageRenders.popularMoviesPage();
})();
