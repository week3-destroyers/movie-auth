import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        const movie = this.props.movie;
        return /*html*/ `
            <li>
                <p>${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}">
            </li>
        `;
    }
}

export default MovieItem;