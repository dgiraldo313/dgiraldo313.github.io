import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <div id="social-icons">
        <a href="/" target="_blank">
          <i className="fa fa-github github" aria-hidden="true"></i>
        </a>
        <a href="/" target="_blank">
          <i className="fa fa-linkedin linked-in" aria-hidden="true"></i>
        </a>
        <a href="/" target="_blank">
          <i className="fa fa-twitter twitter" aria-hidden="true"></i>
        </a>
      </div>
    );
  }

}

export default Social;
