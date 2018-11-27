import React, { Component } from 'react';
import NavLinks from '../../Containers/NavLinks';

import '../../sass/inc/topbar.scss'

class Topbar extends Component {
  render() {
    return (
      <div id="topbar">
        <div id="top-nav">
          <div className="nav-links">
            <NavLinks parent="tabs" classAtts="tab" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
