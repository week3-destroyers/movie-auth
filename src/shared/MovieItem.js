import Component from '../Component.js';
import Favorite from './Favorite.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import { setFavorite } from '../services/actions.js';

class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

        const userMovieRef = userFavoritesRef
            .child(auth.currentUser.uid)
            .child(movie.id);

        const container = dom.querySelector('.favorite-container');

        const favorite = new Favorite({
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                setFavorite(makeFavorite, movie);
            }
        });

        container.appendChild(favorite.render());

        userMovieRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favorite.update({ isFavorite });
        });

        return dom;
    }
    renderTemplate() {
        const movie = this.props.movie;
        const title = movie.title || movie.name;
        const image = movie.poster_path ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` : './assets/movie-not-found.png';
        return /*html*/ `
            <li class="movie">
                <div>
                    <h2>${title}</h2>
                    <div class="favorite-container"></div>
                    <a href="./movie.html?id=${movie.id}"><img class="movie-image" src="${image}" alt="${title}"></a>
                </div>
            </li>
        `;
    }
}

export default MovieItem;