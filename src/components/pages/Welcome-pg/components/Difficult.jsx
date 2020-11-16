import React from 'react';

export default class Difficult extends React.Component{
    constructor(props) {
        super(props);
        this.state = {easy: "easy" , medium: "medium", hard: "hard"};
    }

    render(){
        return (
            <select className="welcome-selectDifficult" defaultValue ="">
                <option value = ""disabled>Dificulty (select)</option>
                <option>{this.state.easy}</option>
                <option>{this.state.medium}</option>
                <option>{this.state.hard}</option>
            </select>
        )
    }
}