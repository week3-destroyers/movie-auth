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
                
            </ul>
        `;
    }
}

export default MovieList;