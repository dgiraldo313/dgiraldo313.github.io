import React, { Component } from 'react';

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.theme = this.props.theme;
    this.updateTheme = this.props.refresh;

  }

  switchTheme() {
    let currTheme = this.theme;
    let state;
    if (currTheme === 'dark') {
      state = {
        theme: 'light',
      };
    } else {
      state = {
        theme: 'dark',
      };
    }

    // UPDATE CURRENT STATE OF APP TO OPPOSITE THEME
    this.updateTheme(state);

  }

  render() {
    // CREATES TOOL TIP TO TELL USERS WHICH THEME THEY WILL BE SWITCHING TO
    let toolTip = () => {
                    let oppositeTheme = this.theme === 'dark' ?
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

    let switchButton = this.theme === 'dark' ?
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
      <div id="switch">
        {switchButton}
      </div>
    );
  }

}

export default ThemeSwitcher;
