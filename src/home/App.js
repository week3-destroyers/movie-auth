import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import Search from './Search.js';
import movieListApi from '../services/movie-list-api.js';
import hashStorage from '../utils/hash-storage.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        dom.prepend(headerDOM);

        const main = dom.querySelector('main');

        const movieList = new MovieList({ movies: [] });
        const movieListDOM = movieList.render();

        const search = new Search();
        const searchDOM = search.render();

        main.appendChild(searchDOM);
        main.appendChild(movieListDOM);

        function loadList() {
            const queryProps = hashStorage.get();
            if(queryProps.search) {
                movieListApi.getSearch({ search: queryProps.search })
                    .then(response => {
                        const movies = response.results;
                        movieList.update({ movies });
                    });
            } else {
                movieListApi.getTrending()
                    .then(response => {
                        const movies = response.results;
                        movieList.update({ movies });
                    });
            }
        }
        loadList();

        window.addEventListener('hashchange', () => {
            loadList();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;