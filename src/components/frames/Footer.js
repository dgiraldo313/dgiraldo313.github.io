import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="left-side">
          <div className="social-icons">
            social icons
          </div>
        </div>
        <div className="right-side">
          <div className="copy-right">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <p>Daniel Giraldo | 2016</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
