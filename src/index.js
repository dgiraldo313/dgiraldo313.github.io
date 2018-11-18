// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './sass/styles.scss';

import App from './App';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
