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

  componentDidMount() {
    this.theme = this.setTheme('dark');
  }

  componentWillUnmount() {
    clear(this.theme);
  }

  setTheme(theme) {
    console.log(this);
    this.setState({
      theme: theme,
    });
  }

  switchTheme() {
    let currTheme = this.state.theme;
    console.log(currTheme);
    if (currTheme === 'dark') {
      this.setState({
        theme: 'light',
      });
    } else {
      this.setState({
        theme: 'dark',
      });
    }

  }

  render() {
    let toolTip = () => {
                    let oppositeTheme = this.state.theme === 'dark' ?
                                        'light' :
                                        'dark';

                    let toolTip = <div className="tool-tip">
                                  <p className="class-message">
                                    Switch to <span className= {oppositeTheme}>
                                                        { oppositeTheme } </span>
                                     theme</p>
                                </div>;
                    return (toolTip);
                  };

    let switchButton = this.state.theme === 'dark' ?
                      <button onClick ={this.switchTheme.bind(this)}>
                        { toolTip() }
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                      </button>
                      :
                      <button onClick ={this.switchTheme.bind(this)}>
                        { toolTip() }
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                      </button>;
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
        <div id="switch">
          {switchButton}
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
