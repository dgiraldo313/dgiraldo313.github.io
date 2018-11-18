import React, { Component } from 'react';

import Projects from '../Containers/Projects';

class Work extends Component {
  render() {
    let content = this.props.content;
    return (
      <div className="work-container">
        <div className="content">
          <div className="header">
            <i className="fa fa-code" aria-hidden="true"></i>
          </div>
          <div className="body">
            <div className="projects-container">
              <h1>Personal Projects:</h1>
              <Projects projects={ content.projects } key= "projects" />

            </div>
            <div className="freelance-container">
              <h1>Freelance Work:</h1>
              <Projects projects={ content.freelance } key= "freelance" />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Work;
