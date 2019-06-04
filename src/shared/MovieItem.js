import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        const movie = this.props.movie;
        const title = movie.title || movie.name;
        return /*html*/ `
            <li class="movie">
                <div>
                    <h2>${title}</h2>
                    <img class="movie-image" src="http://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${title}">
                </div>
            </li>
        `;
    }
}

export default MovieItem;