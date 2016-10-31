import React, { Component } from 'react';

// load components
import Sidebar from './frames/Sidebar';
import Topbar from './frames/Topbar';
import Footer from './frames/Footer';

//import widgets
import ThemeSwitcher from './widgets/ThemeSwitcher';

class App extends Component {
  constructor(props) {
    super(props);

    // states to add functionality to the website
    this.state = { theme: 'dark' };

  }

  // HELPER FUNCTION TO ALLOW COMPONENTS TO UPDATE STATE OF APP
  refreshState(state) {
    this.setState({
              theme: state.theme,
            });
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
        <ThemeSwitcher key={ this.state.theme }
                      theme={ this.state.theme }
                  refresh={ function (state) {
                              this.refreshState(state);
                            }.bind(this)
                          }/>
        <Footer />
      </div>
    );
  }

}

export default App;
