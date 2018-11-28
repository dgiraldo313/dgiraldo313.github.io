import React, { Component } from 'react';

class FunFact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            funFact: this.getFunFact(),
        };

        // bind functions
        this.getFunFact = this.getFunFact.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateState(),
            (1000 * 8)
        );
    }

    componentWillUnmount() {
        // Clear interval before unmounting to prevent leak
        clearInterval( this.timerID );
    }

    updateState() {
        this.setState({
            funFact: this.getFunFact(),
        });
    }

    getFunFact() {
        const funFacts = this.props.funFacts;
        return funFacts[(Math.floor(Math.random() * funFacts.length))];
    }

    render() {
        return (
            <span className="dynamic-content"> { this.state.funFact } </span>
        );
    }
}

export default FunFact;
