import Component from '../Component.js';

class Favorite extends Component {
    render() {
        const button = this.renderDOM();
        button.addEventListener('click', () => {
            this.props.onFavorite(!this.props.isFavorite);
        });
        return button;
    }
    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        const star = isFavorite ? '★' : '☆';
        return /*html*/ `
            <button class="favorite-button">${star}</button>
        `;
    }
}

export default Favorite;