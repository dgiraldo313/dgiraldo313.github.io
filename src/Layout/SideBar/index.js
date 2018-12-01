import React from 'react';
import NavLinks from '../../Containers/NavLinks';
import { Link } from "react-router-dom";
import '../../sass/inc/sidebar.scss'

// TODO convert this back to component and add functionality to expand and close folders
const Sidebar = ( props ) => {
    return (
        <div id="sidebar">
            <div id="side-nav">
                <div className="nav-links">
                    <div className="tree-level first fa fa-chevron-down">
                        <div className="folder fa fa-book">
                            <span>Danny_Giraldo</span>
                        </div>
                    </div>
                    <div className="tree-level second fa fa-chevron-down">
                        <div className="folder fa fa-folder-open">
                            <span>portfolio</span>
                        </div>
                    </div>

                    <NavLinks parent="files" classAtts="tree-level third fa fa-file-code-o"/>

                </div>
            </div>
            <div className="email-container">
                <Link to="/contact" className="email-widget">
                    <i className="fa fa-coffee" aria-hidden="true"></i>
                    <p>Lets Get a Drink!</p>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
