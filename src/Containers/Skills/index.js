import React from 'react';
import '../../sass/inc/skills.scss';

const TechSkills = ( props ) => {
    return (
        <div id="skills">
            <div className="skills-container">
                {
                    props.skills.map((skill, index) => (
                        <span className= { `skill ${ skill } grid-${ props.skills.length }` } key={ index } >{ skill }</span>
                    ))
                }
            </div>
        </div>
    );
}

export default TechSkills;
