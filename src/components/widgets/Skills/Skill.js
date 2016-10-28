import React from 'react';

const Skill = props => (
    <span className= { 'skill' +
                      ' '
                      + props.skill
                      + ' '
                      + 'grid-' + props.grid}>
                    { props.skill }</span>
);

export default Skill;
