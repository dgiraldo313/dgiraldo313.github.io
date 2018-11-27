import React, { Component } from 'react';

import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        { this.get() }
      </div>
    );
  }

  get() {
    let projects = this.props.projects;

    //loop through list of projects
    let projectsHTML = projects.map((project, index) => {
      let projectHTML = <Project project={ project }
                                 key= { index } />;

      // return each project component
      return projectHTML;
    });

    // return all the project components
    return projectsHTML;
  }

}

export default Projects;
