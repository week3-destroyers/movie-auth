import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        dom.prepend(headerDOM);

        const main = dom.querySelector('main');

        const movieList = new MovieList({ movies: [] });
        const movieListDOM = movieList.render();
        main.appendChild(movieListDOM);

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