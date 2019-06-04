import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <p>This Movie</p>
                <img src="./assets/movie-not-found.png">
            </li>
        `;
    }
}

export default MovieItem;