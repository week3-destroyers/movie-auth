import { auth, userFavoritesRef } from '../services/firebase.js';

export function setFavorite(makeFavorite, movie) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(movie.id);

    if(makeFavorite) {
        return userMovieRef.set({
            id: movie.id,
            title: movie.title || movie.name,
            poster_path: movie.poster_path 
        });
    }
    else {
        return userMovieRef.remove();
    }
}

