import React from 'react';

import TechSkills from '../Skills';


const Project = ( props ) => {

    return (
        <div className="project">
            <div className="meta-container">
                <div className="title">
                    { props.project.title }
                </div>
                <div className="links">
                    <div id="social-icons">
                        {
                            props.project.links.website ?
                                <a href={ props.project.links.website } target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-globe website" aria-hidden="true"></i>
                                </a>
                                : null
                        }

                        {
                            props.project.links.github ?
                                <a href= { props.project.links.github } target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github github" aria-hidden="true"></i>
                                </a>
                                : null
                        }
                    </div>
                </div>
            </div>
            <div className="description">
                <p>
                    { props.project.description }
                </p>
            </div>
            <div className="tech-stack">
                <TechSkills skills= { props.project.techStack } />
            </div>
        </div>
    );
}


export default Project;
