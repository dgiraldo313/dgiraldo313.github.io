import React, { Component } from 'react';
import SideNav from '../widgets/SideNav';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <SideNav />
        <div className="email-container">
          <a href="/ "className="email-widget">
            <i className="fa fa-coffee" aria-hidden="true"></i>
            <p>Lets Get a Drink!</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
