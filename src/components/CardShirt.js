import React from 'react';

export default class CardShirts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {first: "first opt", second: "second opt", third: "third opt"};
    }

    render(){
        return (
            <div className="welcome-cardShirts">
                <span> Select shirts for cards:</span>
                <div className="welcome-cardShirts-wrapper">
                    <button className="cardsShirts btn">{this.state.first}</button>
                    <button className="cardsShirts btn">{this.state.second}</button>
                    <button className="cardsShirts btn">{this.state.third}</button>
                </div>
            </div>
        )
    }
}