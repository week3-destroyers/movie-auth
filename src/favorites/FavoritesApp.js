import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'My favorite movies' });
        dom.insertBefore(header.render(), main);

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        userFavoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                console.log(snapshot);
                const value = snapshot.val();
                console.log(value);
                const movies = value ? Object.values(value) : [];
                movieList.update({ movies });
            });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main></main>
        </div>
    `;
    }
}

export default FavoritesApp;