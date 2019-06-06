import key from '../../config.js';

const URL = `https://api.themoviedb.org/3/`;
const trendingURL = `${URL}trending/all/day?api_key=${key}`;

const movieListApi = {
    getTrending() {
        return fetch(trendingURL)
            .then(response => response.json());
    },
    getSearch(search) {
        const searchQuery = search.search;
        const searchURL = `${URL}search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

        return fetch(searchURL)
            .then(response => {
                return response.json();
            });
    }
};

export default movieListApi;