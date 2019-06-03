import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('profile test');

test('make sure there is a user', assert => {
    //arrange
    const user = {
        displayName: 'Static Name',
        photoURL: './assets/default-image.jpg'
    };

    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img id="profile-image" src="./assets/default-image.jpg">
            <div>
                <span>Static Name</span>
                <button>Sign Out</button>
            </div>
        </div>
    `;

    //act
    const actual = profile.renderTemplate();

    //assert
    assert.htmlEqual(actual, expected);
});