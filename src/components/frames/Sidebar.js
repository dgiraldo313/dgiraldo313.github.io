import React, { Component } from 'react';
import SideNav from '../widgets/SideNav';

import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <SideNav />
        <div className="email-container">
          <Link to="/contact" className="email-widget">
            <i className="fa fa-coffee" aria-hidden="true"></i>
            <p>Lets Get a Drink!</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
