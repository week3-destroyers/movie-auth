import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        console.log(typeof profile.render());
        dom.appendChild(profile.render());

        auth.onAuthStateChanged(user => {
            console.log(user);
            profile.update({ user });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>Our favorite movies:</h1>
                <!--Profile-->
            </header>
        `;
    }
}

export default Header;