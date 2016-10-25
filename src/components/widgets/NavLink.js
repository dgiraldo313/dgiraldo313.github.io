import React from 'react';
import { Link } from 'react-router';

// create a dynamic NavLink
// that way code won't be repeaded on all Nav Links

const NavLink = props => (
  <Link to={ props.dest } activeClassName="active">
    <div className={ props.classAtts }>
      <span>{ props.content }</span>
    </div>
  </Link>
);

export default NavLink;
