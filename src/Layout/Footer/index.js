import React, { Component } from 'react';

import Social from '../../Containers/Social';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear()
    return (
      <div id="footer">
        <div className="left-side">
          <Social />
        </div>
        <div className="right-side">
          <div className="copy-right">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <p>Daniel Giraldo | { year }</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
