import React from 'react';
import { NavLink } from "react-router-dom";

// create a dynamic NavLink
// that way code won't be repeaded on all Nav Links

const NavigationLink = props => (
  <NavLink exact to={ props.dest } activeClassName="active">
    <div className={ props.classAtts }>
      <span>{ props.content }</span>
    </div>
  </NavLink>
);

export default NavigationLink;
