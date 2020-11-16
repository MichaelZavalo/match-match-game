import React from 'react';

export default class CounterOfTirns extends React.Component{
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    render(){
        return (
            <p className="game-counter">{this.state.counter}</p>
        )
    }
}