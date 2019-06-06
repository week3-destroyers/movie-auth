import './html-equal.js';
import { app } from '../src/services/firebase.js'; 

import './hash-storage.test.js';
import './html-equal.test.js';
import './html-to-DOM.test.js';
import './Profile.test.js';
import './MovieItem.test.js';
import './MovieDetail.test.js';

QUnit.done(() => {
    app.delete();
}); 
