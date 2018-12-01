import React, { Component } from 'react';

class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        // Bind functions
        this.switchTheme = this.switchTheme.bind(this)
        this.updateThemeInStorage = this.updateThemeInStorage.bind(this)

    }

    switchTheme() {

      const newTheme = this.props.theme === "dark" ? "light" : "dark"

      // UPDATE CURRENT STATE OF APP TO OPPOSITE THEME
      this.props.update( {
          theme: newTheme,
      });

      this.updateThemeInStorage( newTheme )
    }

    updateThemeInStorage( theme ) {
	    if ( typeof Storage !== "undefined" ) {
		    localStorage.setItem("DG_THEME", theme )
	    }
    }

     render() {
        // CREATES TOOL TIP TO TELL USERS WHICH THEME THEY WILL BE SWITCHING TO
         const toolTip = () => {
             const oppositeTheme = this.props.theme === 'dark' ? 'light' : 'dark';
             return (
                 <div className="tool-tip">
                     <p className="class-message">
                         Switch to <span className={oppositeTheme}> {oppositeTheme} </span>theme</p>
                 </div>
             )
         }

        return (

            <div id="switch">
                <button onClick ={ this.switchTheme }>
                    { toolTip() }
                    <i className={ `fa ${ this.props.theme ==='dark' ? "fa-sun-o" : "fa-moon-o" }`} aria-hidden="true"></i>
                </button>
            </div>
        );
    }

}

export default ThemeSwitcher;
