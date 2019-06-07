import Component from '../Component.js';

class UserItem extends Component {
    renderTemplate() {
        const user = this.props.user;
        const avatar = user.photoURL || './assets/default-image.jpg';

        return /*html*/ `
            <li>
                <a href="./favorites.html?id=${user.id}">${user.displayName}</a>
                <img src="${avatar}">
            </li>
        `;
    }
}

export default UserItem;