import Component from '../Component.js';
// import { auth } from '../services/firebase.js';


class Profile extends Component {
    renderTemplate() {
        const user = this.props.user;

        return /*html*/ `
            <div class="profile">
                <img id="profile-image" src="${user.photoURL}">
                <div>
                    <span>${user.displayName}</span>
                    <button>Sign Out</button>
                </div>
            </div>
        `;
    }
}

export default Profile;