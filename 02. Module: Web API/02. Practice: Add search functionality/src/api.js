class API {
    baseUrl = 'https://api.themoviedb.org/3';
    token = 'c1f1bfcf10259d5f3d7bd66da82c97f0';

    create_url(resource, params = {}) {
        const query = [];

        for (const [key, value] of Object.entries(params)) {
            query.push(`${key}=${value}`);
        }

        return `${this.baseUrl}${resource}${query.length ? `?${query.join('&')}` : ''}`;
    }

    create_poster_url(poster_path = null) {
        if (poster_path) {
            return `https://image.tmdb.org/t/p/w300${poster_path}`;
        } else {
            return 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic' +
                   '/glyphicons-basic-38-picture-grey-c2ebdbb057f2a76141859' +
                   '31650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
        }
    }

    async fetchMoviesBySearchText(text, page = 1) {
        const url = this.create_url('/search/movie', {
            api_key: this.token,
            language: 'en-US',
            query: text,
            page: page
        });

        const res = await fetch(url);
        return await res.json();
    }
}

export default new API();
