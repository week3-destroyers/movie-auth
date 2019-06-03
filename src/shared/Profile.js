import Component from '../Component.js';
import { auth } from '../services/firebase.js';


class Profile extends Component {
    render() {
        console.log(this.props);
        const dom = this.renderDOM();

        if(this.props.user) {
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                auth.signOut();
            });
        }
        return dom;
    }

    renderTemplate() {
        const user = this.props.user;
        if(!user) {
            return `<div></div>`;
        }
        const avatar = user.photoURL || './assets/default-image.jpg';

        return /*html*/ `
            <div class="profile">
                <img id="profile-image" src="${avatar}">
                <div>
                    <span>${user.displayName}</span>
                    <button>Sign Out</button>
                </div>
            </div>
        `;
    }
}

export default Profile;