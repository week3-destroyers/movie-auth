import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        const movie = this.props.movie;
        const title = movie.title || movie.name;
        const image = movie.poster_path ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` : './assets/movie-not-found.png';
        return /*html*/ `
            <li class="movie">
                <div>
                    <h2>${title}</h2>
                    <img class="movie-image" src="${image}" alt="${title}">
                </div>
            </li>
        `;
    }
}

export default MovieItem;