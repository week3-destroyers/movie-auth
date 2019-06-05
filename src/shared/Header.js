import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        
        dom.appendChild(profile.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }

    renderTemplate() {
        const title = this.props.title;

        return /*html*/ `
            <header>
                <section>
                    <h1>${title}</h1>
                    <!--Profile-->
                </section>
                <nav class="main-nav">
                    <a href="./">Home</a>
                    <a href="./favorites.html">Favorites</a>
                </nav>
            </header>
        `;
    }
}

export default Header;