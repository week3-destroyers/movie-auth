import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../utils/QUERY.js';
import movieListApi from '../services/movie-list-api.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Movie' });
        dom.insertBefore(header.render(), main);

        const movieDetail = new MovieDetail();
        
        const search = window.location.search;
        const query = QUERY.parse(search);
        const id = query.id;

        movieListApi.getMovie(id).then(movie => {
            console.log(movie);
            movieDetail.update({ movie });
        });

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