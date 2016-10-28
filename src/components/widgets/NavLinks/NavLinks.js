import React, { Component } from 'react';
import NavLink from './NavLink';

class NavLinks extends Component{
  render() {
    let classAtts = this.props.classAtts;
    return (
      <div className={ this.props.parent }>
        <NavLink dest="/" content="home.html" classAtts={ classAtts } />
        <NavLink dest="/about" content="about.css" classAtts={ classAtts } />
        <NavLink dest="/work" content="work.js" classAtts={ classAtts } />
        <NavLink dest="/contact" content="contact.scss" classAtts={ classAtts } />
      </div>
    );
  }
}

export default NavLinks;
