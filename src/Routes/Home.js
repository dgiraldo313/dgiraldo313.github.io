import React, { Component } from 'react';
import Social from '../Containers/Social';

import '../sass/pages/home.scss'


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
    randomGreeting( ) {
        const greetings = this.props.content.greetings;
        return greetings[ Math.floor(Math.random() * greetings.length) ];
    }


    // TODO integrate suspense to load low resolution img

    render() {
	    const content = this.props.content
	    return (
		    <div className="home-container">
			    <div className="content">
				    <img className="avatar" src={ content.AvatarURL } alt="Daniel Giraldo Profile"/>
				    <div>
					    <div className="greeting">
						    { this.state.greetingText }
					    </div>
					    <div className="tag-line">
						    { content.description }
					    </div>
				    </div>
				    <Social/>
			    </div>
		    </div>
	    )
    }
}

export default Home;
