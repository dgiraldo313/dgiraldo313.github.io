import React, { Component } from 'react';
import Social from '../Containers/Social';
import '../sass/pages/home.scss'


// TODO integrate hooks on all function bindings
class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
          greetingText: null
        }

        // bind functions
        this.randomGreeting = this.randomGreeting.bind(this)

    }

    componentDidMount() {
      this.setState( {
          greetingText: this.randomGreeting()
      })
    }

    /*
     * Generate random greeting to display every time user visits the page
     * */
    randomGreeting() {
        const greetings = this.props.content.greetings;
        return greetings[ Math.floor(Math.random() * greetings.length) ];
    }


    render() {
      return (
        <div className="home-container">
          <div className="content">
            <img className="avatar" src={ this.props.content.AvatarURL }/>
            <div>
              <div className="greeting">
                { this.state.greetingText }
              </div>
              <div className="tag-line">
                { this.props.content.description }
              </div>
            </div>
            <Social />
          </div>
        </div>
      );
    }

}

export default Home;
