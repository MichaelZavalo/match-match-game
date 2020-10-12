import React from 'react';

export default class CardShirts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {startGame: "Start Game"};
    }

    render(){
        return (
            <>
                <button className="welcome-startBtn btn" onClick={this.props.onClick}>{this.state.startGame}</button>
            </>
        )
    }
}