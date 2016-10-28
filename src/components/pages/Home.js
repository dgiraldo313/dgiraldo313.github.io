import React, { Component } from 'react';

import Social from '../widgets/Social';

class Home extends Component{
  render() {
    let content = this.props.route.content;
    console.log(content);
    return (
      <div className="home-container">
        <div className="content">
          <img className="avatar" src={ content.AvatarURL }/>
          <div>
            <div className="greeting">
              { this.randomGreeting(content.greetings) }
            </div>
            <div className="tag-line">
              { content.description }
            </div>
          </div>
          <Social />
        </div>
      </div>
    );
  }
}

/* generate random greeting to display every time
    user visits the site */
Home.prototype.randomGreeting = (greetings) => {
  let randomNumber = Math.floor(Math.random() * greetings.length);
  return greetings[randomNumber];
};

export default Home;
