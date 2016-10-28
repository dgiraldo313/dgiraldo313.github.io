import React, { Component } from 'react';

// load components
import Sidebar from './frames/Sidebar';
import Topbar from './frames/Topbar';
import Footer from './frames/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    // states to add functionality to the website
    this.state = { theme: 'dark' };
  }

  render() {
    return (
      <div id="app" className={ this.state.theme }>
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="right-container">
          <Topbar />
          <div id="main">

            { this.props.children }

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
