import MovieDetail from '../src/movie/MovieDetail.js';
const test = QUnit.test;

QUnit.module('Movie Detail');

test('renders empty div if no data', assert => {

    const movie = null;
    const movieDetail = new MovieDetail({ movie });
    const expected = /*html*/ `
        <div></div>
    `;

    const html = movieDetail.renderTemplate();

    assert.htmlEqual(html, expected);
});
