import React from 'react';
import NavigationLink from './NavigationLink';

// TODO integrate logic to open as tabs and allow to remove from top bar when closed
const NavLinks = ( props ) => {
    let classAtts = props.classAtts;
    return (
        <div className={ props.parent }>
            <NavigationLink dest="/" content="home.html" classAtts={ classAtts } />
            <NavigationLink dest="/about" content="about.css" classAtts={ classAtts } />
            <NavigationLink dest="/work" content="work.js" classAtts={ classAtts } />
            <NavigationLink dest="/contact" content="contact.xml" classAtts={ classAtts } />
        </div>
    )
}

export default NavLinks;
