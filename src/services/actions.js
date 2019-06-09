import { auth, userFavoritesRef, movieFavoritesRef } from '../services/firebase.js';

export function getUserMovieFavoritesRef(id) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function getMovieUserFavoritesRef(id) {
    const movieUserRef = movieFavoritesRef
        .child(id)
        .child(auth.currentUser.uid);
    return movieUserRef;
}

export function setFavorite(makeFavorite, movie) {
    const id = movie.id;
    const userMovieRef = getUserMovieFavoritesRef(id);
    const movieUserRef = getMovieUserFavoritesRef(id);

    if(makeFavorite) {
        userMovieRef.set({
            id: movie.id,
            title: movie.title || movie.name,
            poster_path: movie.poster_path 
        });
        movieUserRef.set({
            id: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoUrl: auth.currentUser.photoURL
        });
    }
    else {
        userMovieRef.remove();
        movieUserRef.remove();
    }
}

