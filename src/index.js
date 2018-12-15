// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './sass/partials/_normalize.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Need to disable service worker, because it's preventing access to other apps
// registerServiceWorker();
