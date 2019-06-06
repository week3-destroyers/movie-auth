import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../utils/QUERY.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Movie' });
        dom.insertBefore(header.render(), main);

        const movieDetail = new MovieDetail({ movie: {
            title: 'Captain Marvel',
            poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
            overview: 'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.'
        } 
        });
        
        const search = window.location.search;
        const query = QUERY.parse(search);
        const id = query.id;

        if(!id) {
            window.location = './';
        }
        main.appendChild(movieDetail.render());

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

export default MovieApp;