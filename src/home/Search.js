import Component from '../Component.js';
import hashStorage from '../utils/hash-storage.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const search = input.value;
            if(search) {
                hashStorage.set({ search });
            }
            else {
                hashStorage.remove('search');
            }
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <form>
                <input type="text">
                <button>Search</button>
            </form>
        `;
    }
}

export default Search;