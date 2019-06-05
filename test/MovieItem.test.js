import MovieItem from '../src/shared/MovieItem.js';
const test = QUnit.test;

QUnit.module('Movie item test');

test('', assert => {

    const movie = {
        title: 'Captain Marvel',
        poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg'
    };
    const expected = /*html*/ `
        <li class="movie">
            <div>
                <h2>Captain Marvel</h2>
                <div class="favorite-container"></div>
                <img class="movie-image" src="http://image.tmdb.org/t/p/w200/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" alt="Captain Marvel">
            </div>
        </li>
    `;
    const movieItem = new MovieItem({ movie });
    const actual = movieItem.renderTemplate();

    assert.htmlEqual(actual, expected);
});