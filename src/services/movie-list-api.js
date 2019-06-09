import key from '../../config.js';

// Retrieving movie detail
// https://api.themoviedb.org/3/movie/87108?api_key=&language=en-US

const API_KEY_QUERY = `?api_key=${key}`;
const URL = `https://api.themoviedb.org/3/`;
const TRENDING_URL = `${URL}trending/movie/day${API_KEY_QUERY}`;
const DETAIL_URL = `${URL}movie/`;
const SEARCH_URL = `${URL}search/movie${API_KEY_QUERY}`;

const movieListApi = {
    getTrending() {
        return fetch(TRENDING_URL)
            .then(response => response.json());
    },
    getSearch(search) {
        const searchQuery = search.search;
        const searchURL = `${SEARCH_URL}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

        return fetch(searchURL)
            .then(response => {
                return response.json();
            });
    },
    getMovie(id) {
        const url = `${DETAIL_URL}${id}${API_KEY_QUERY}&language=en-US`;

        return fetch(url).then(response => response.json());
    }
};

export default movieListApi;