class API {
    baseUrl = 'https://api.themoviedb.org/3';
    token = 'c1f1bfcf10259d5f3d7bd66da82c97f0';

    async fetchPopularMovies(page = 1) {
        const url = `${this.baseUrl}/movie/popular?api_key=${this.token}&language=en-US&page=${page}`;
        const res = await fetch(url);

        return await res.json();
    }
}

export default new API();
