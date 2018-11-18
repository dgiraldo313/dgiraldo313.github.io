import React, { Component } from 'react';

class FunFact extends Component {

  constructor(props) {
    super(props);

    // console.log(this.props.funFacts);
    this.state = {
      funFact: this.get(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.update(),
      (1000 * 15)
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  update() {
    this.setState({
      funFact: this.get(),
    });
  }

  get() {
    let funFacts = this.props.funFacts;
    let funFact = funFacts[(Math.floor(Math.random() * funFacts.length))];
    return funFact;
  }

  render() {
    return (
      <span className="dynamic-content"> { this.state.funFact } </span>
    );
  }
}

export default FunFact;
