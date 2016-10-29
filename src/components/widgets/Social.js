import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <div id="social-icons">
        <a href="https://github.com/dgiraldo313" target="_blank">
          <i className="fa fa-github github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/danielgiraldo313" target="_blank">
          <i className="fa fa-linkedin linked-in" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/dgiraldo313" target="_blank">
          <i className="fa fa-twitter twitter" aria-hidden="true"></i>
        </a>
      </div>
    );
  }

}

export default Social;
