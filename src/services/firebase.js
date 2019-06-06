const config = {
    apiKey: 'AIzaSyDcPSFX2nOHZqTfzasroPOGFy8N7tJ_5sg',
    authDomain: 'favorite-movie-auth.firebaseapp.com',
    databaseURL: 'https://favorite-movie-auth.firebaseio.com',
    projectId: 'favorite-movie-auth',
    storageBucket: 'favorite-movie-auth.appspot.com',
    messagingSenderId: '968422327236',
    appId: '1:968422327236:web:66d3b1c3d8fbaa9a'
};

  // Initialize Firebase
export const app = firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.database();

export const userFavoritesRef = db.ref('userMovies');

window.db = db;