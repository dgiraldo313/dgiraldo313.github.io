import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";

// View Routes
import Home from './Routes/Home';
import About from './Routes/About';
import Work from './Routes/Work';
import Contact from './Routes/Contact';

// Common Layout
import Sidebar from './Layout/SideBar';
import Topbar from './Layout/TopBar';
import Footer from './Layout/Footer';

//import widgets
import ThemeSwitcher from './Components/ThemeSwitcher';

import Content from "./data/Content.js"

import './sass/inc/app.scss'
import './sass/inc/main.scss'
// TODO Try React lazy load to dynamically load theme depending on theme state
import './sass/inc/theme_color.scss'


class App extends Component {
  constructor(props) {
    super(props);

    // states to add functionality to the website
    this.state = {
      theme: 'dark'
    }

    // Bind functions
    this.refreshState = this.refreshState.bind(this)

  }

  // HELPER FUNCTION TO ALLOW COMPONENTS TO UPDATE STATE OF APP
  refreshState(state) {
    this.setState(
      {
        theme: state.theme
      }
    )
  }

  render() {
    return (
      <HashRouter>
        <div id="app" className={ this.state.theme }>
          <div className="left-container">
            <Sidebar />
          </div>
          <div className="right-container">
            <Topbar />
            <div id="main">
              <Route exact path="/" render={ () => <Home content={ Content.home } />  } />
              <Route path="/about" render={ () => <About content={ Content.about } />  } />
              <Route path="/work" render={ () => <Work content={ Content.work } />  } />
              <Route path="/contact" render={ () => <Contact content={ Content.contact } />  }/>
            </div>
          </div>
          <ThemeSwitcher key={ this.state.theme }
                         theme={ this.state.theme }
                         refresh={ (state) => this.refreshState(state) } />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
