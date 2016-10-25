// import react
import React from 'react';

// import react router modules
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// import components for the different pages
import App from './components/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

//Routes
const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ Home } />
      <Route path="about" component={ About } />
      <Route path="work" component={ Work } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
);

export default routes;
