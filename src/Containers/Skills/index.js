import React, { Component } from 'react';

import Skill from './Skill';

// import '../../../sass/inc/skills.scss';

class TechSkills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="skills-container">
          { this.get() }
        </div>
      </div>
    );
  }

  get() {
    let skills = this.props.skills;
    let numOfSkills = skills.length;

    // loop through list of skills
    let skillsHTML = skills.map((skill, index) => {
      let skillHTML = <Skill skill= { skill }
                    grid= { numOfSkills }
                    key= { index } />;
      return skillHTML;
    });

    //return skills component
    return skillsHTML;

  }
}

export default TechSkills;
