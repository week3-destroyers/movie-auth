import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import UserList from './UserList.js';
import { setFavorite, getUserMovieFavoritesRef } from '../services/actions.js';
import { movieFavoritesRef } from '../services/firebase.js';


class MovieDetail extends Component {
    render() {
        const dom = this.renderDOM();

        const movie = this.props.movie;

        if(movie) {
            const id = movie.id;
    
            const userMovieRef = getUserMovieFavoritesRef(id);
    
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

            const userList = new UserList({ users: [] });
            dom.appendChild(userList.render());

            movieFavoritesRef
                .child(movie.id)
                .on('value', snapshot => {
                    console.log(snapshot);
                    const value = snapshot.val();
                    console.log(value);
                    const users = value ? Object.values(value) : [];
                    userList.update({ users });
                });
        }

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
            <div class="favorite-container"></div>
            <img class="movie-image" src="${image}" alt="${title}">
            <p>${movie.overview}</p>
        </div>
    `;
    }
}

export default MovieDetail;