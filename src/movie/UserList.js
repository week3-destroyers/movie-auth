import Component from '../Component.js';
import UserItem from './UserItem.js';

class UserList extends Component {
    render() {
        const dom = this.renderDOM();
        const users = this.props.users;

        users.forEach(user => {
            const userItem = new UserItem({ user });
            dom.appendChild(userItem.render());
        });

        return dom;
    }
    renderTemplate() {

        return /*html*/ `
            <ul>
            <h2>Favorited By Users:</h2>
            </ul>
        `;
    }
}

export default UserList;