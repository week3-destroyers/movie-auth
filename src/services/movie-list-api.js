import key from '../../config.js';

// Retrieving movie detail
// https://api.themoviedb.org/3/movie/87108?api_key=&language=en-US

const URL = `https://api.themoviedb.org/3/`;
const trendingURL = `${URL}trending/all/day?api_key=${key}`;
const detailURL = `${URL}movie/`;

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
    },
    getMovie(id) {
        const url = `${detailURL}${id}?api_key=${key}&language=en-US`;

        return fetch(url).then(response => response.json());
    }
};

export default movieListApi;