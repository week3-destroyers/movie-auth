import '../utils/check-auth.js';
import FavoritesApp from './FavoritesApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new FavoritesApp();
    root.appendChild(app.render());
});