import React from 'react';

import Project from './Project';


const Projects = ( props ) => {
    return (
        <div className="projects">
            {
              props.projects.map((project, index) => (
                  <Project project={ project } key= { index } />
              ))
            }
        </div>
    );
}

export default Projects;
