import Component from '../Component.js';
// import { auth } from '../services/firebase.js';


class Profile extends Component {
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