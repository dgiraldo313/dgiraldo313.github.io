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

// import content
import Content from './data/Content';

console.dir(Content);

//Routes
const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ Home } content={ Content.home }/>
      <Route path="about" component={ About } content={ Content.about } />
      <Route path="work" component={ Work } content={ Content.work } />
      <Route path="contact" component={ Contact } content={ Content.contact } />
    </Route>
  </Router>
);

export default routes;
