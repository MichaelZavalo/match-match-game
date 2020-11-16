import React from 'react';

export default class GameHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <header className="game-top">
                <span>MMG</span>
                <button>Hello</button>
            </header>
        )
    }
}