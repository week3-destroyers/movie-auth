import { auth, userFavoritesRef } from '../services/firebase.js';

export function getUserMovieFavoritesRef(id) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function setFavorite(makeFavorite, movie) {
    const id = movie.id;
    const userMovieRef = getUserMovieFavoritesRef(id);

    // const userMovieRef = userFavoritesRef
    //     .child(auth.currentUser.uid)
    //     .child(movie.id);

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

