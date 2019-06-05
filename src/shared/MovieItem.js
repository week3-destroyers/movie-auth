import Component from '../Component.js';
import Favorite from './Favorite.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

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
                if(makeFavorite) {
                    userMovieRef.set({
                        id: movie.id,
                        title: movie.title || movie.name,
                        poster_path: movie.poster_path 
                    });
                }
                else {
                    userMovieRef.remove();
                }
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
                    <img class="movie-image" src="${image}" alt="${title}">
                </div>
            </li>
        `;
    }
}

export default MovieItem;