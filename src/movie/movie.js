import '../utils/check-auth.js';
import MovieApp from './MovieApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new MovieApp();
    root.appendChild(app.render());
});