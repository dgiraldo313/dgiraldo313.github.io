import React, { Component } from 'react';

import TechSkills from '../Skills/TechSkills';

class Project extends Component {
  render() {
    return (
      <div className="project">
          <div className="meta-container">
            <div className="title">
              { this.props.project.title }
            </div>
            <div className="links">
              { this.getLinks() }
            </div>
          </div>
          <div className="description">
            <p>
              { this.props.project.description }
            </p>
          </div>
          <div className="tech-stack">
            <TechSkills skills= { this.props.project.techStack } />
          </div>
        </div>
    );
  }

  getLinks() {
    let availableLinks = "";
    let websiteLink = this.props.project.links.website ?
                        <a href={ this.props.project.links.website }>
                          <i className="fa fa-globe website" aria-hidden="true"></i>
                        </a> :
                      " ";
    let githubLink = this.props.project.links.github ?
                      <a href= { this.props.project.links.github }>
                      <i className="fa fa-github github" aria-hidden="true"></i>
                      </a>
                      :
                      " ";

   return (
     <div id="social-icons">
       {websiteLink}
       {githubLink}
     </div>
   );
  }

}


export default Project;
