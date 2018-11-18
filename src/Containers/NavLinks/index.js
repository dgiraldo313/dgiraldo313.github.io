import React, { Component } from 'react';
import NavigationLink from './NavigationLink';

class NavLinks extends Component{
  render() {
    let classAtts = this.props.classAtts;
    return (
      <div className={ this.props.parent }>
        <NavigationLink dest="/" content="home.html" classAtts={ classAtts } />
        <NavigationLink dest="/about" content="about.css" classAtts={ classAtts } />
        <NavigationLink dest="/work" content="work.js" classAtts={ classAtts } />
        <NavigationLink dest="/contact" content="contact.xml" classAtts={ classAtts } />
      </div>
    );
  }
}

export default NavLinks;
