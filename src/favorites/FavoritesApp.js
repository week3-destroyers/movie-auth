import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef, usersRef } from '../services/firebase.js';
import QUERY from '../utils/QUERY.js';


class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'My favorite movies' });
        dom.insertBefore(header.render(), main);

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        const query = QUERY.parse(window.location.search);
        const id = query.id ? query.id : auth.currentUser.uid;
        
        if(id === auth.currentUser.uid) {
            header.update({ title: 'Your Favorite Movies' });
        }
        else {
            usersRef
                .child(id)
                .on('value', snapshot => {
                    const value = snapshot.val();
                    const user = value.displayName; 
                    header.update({ title: `${user}'s favorite movies` });
                });
        }

        userFavoritesRef
            .child(id)
            .on('value', snapshot => {
                const value = snapshot.val();
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