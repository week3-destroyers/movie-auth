import Component from '../Component.js';

class MovieDetail extends Component {
    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;
        if(!movie) {
            return '<div></div>';
        }
        const title = movie.title || movie.name;
        const image = movie.poster_path ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` : './assets/movie-not-found.png';

        return /*html*/`
        <div>
            <h1>${movie.title}</h1>
            <img class="movie-image" src="${image}" alt="${title}">
            <p>${movie.overview}</p>
        </div>
    `;
    }
}

export default MovieDetail;