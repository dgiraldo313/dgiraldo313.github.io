import React, { Component } from 'react';
import NavLinks from './NavLinks/NavLinks';

class SideNav extends Component {
  render() {
    return (
      <div id="side-nav">
        <div className="nav-links">
          <div className="tree-level first fa fa-chevron-down">
            <div className="folder fa fa-folder-open"><span>Portfolio</span></div>
          </div>
          <div className="tree-level second fa fa-chevron-down">
            <div className="folder fa fa-folder-open"><span>profile_modules</span></div>
          </div>

          <NavLinks parent="files" classAtts="tree-level third fa fa-file-code-o"/>

        </div>
      </div>
    );
  }
}
export default SideNav;
