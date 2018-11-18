import React, { Component } from 'react';

import TechSkills from '../Containers/Skills';
import FunFact from '../Components/FunFact';

class About extends Component{
  render() {
    let content = this.props.content;
    return (
      <div className="about-container">
        <div className="content">
          <div className="header">
            <i className="fa fa-user" aria-hidden="true"></i>
            <div className="fun-facts">
              <span className="title">Fun Fact:</span>
              <FunFact funFacts= { content.funFacts }/>
            </div>
          </div>
          <div className="body">
            <div className="who">
              <h1>Who?</h1>
              <p>{ content.description }</p>
            </div>
            <div className="skills">
              <h1>What do you know?</h1>
              <div className="tech-stack">
                <div className="advanced">
                  <h3>Advanced:</h3>
                  <TechSkills skills={ content.techStack.advanced } key= {'adv' } />
                </div>
                <div className="intermediate">
                  <h3>Intermediate:</h3>
                  <TechSkills skills={ content.techStack.intermediate } key={ 'int' } />
                </div>
                <div className="some-experience">
                  <h3>Some Experience:</h3>
                  <TechSkills skills={ content.techStack.some } key={ 'some' } />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default About;
