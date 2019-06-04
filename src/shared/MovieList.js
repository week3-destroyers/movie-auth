import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {
    render() {
        const dom = this.renderDOM();

        this.props.movies.forEach(movie => {
            const movieItem = new MovieItem({ movie });
            dom.appendChild(movieItem.render());
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <ul>
                <li>
                    <p>This Movie</p>
                    <img src="./assets/movie-not-found.png">
                </li>
            </ul>
        `;
    }
}

export default MovieList;