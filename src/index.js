// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import './sass/styles.scss';

// get routes - will load the approapiate components
import routes from './router';

// Render
render((
  routes
),
  document.getElementById('root')
);
