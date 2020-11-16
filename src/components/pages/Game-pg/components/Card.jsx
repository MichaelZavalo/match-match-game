import React from 'react';

export default class Card extends React.Component{
    constructor(props) {
        
        super(props);
        this.state = {};
        }
    
    render(){
        
        return (
            <div>
                <img className="game-image" src={this.props.shirtOfCards} alt="card"/>
            </div>
        )
    }
}

/* when card is activated  
<img className="game-image" src={this.props.item.value.value} alt="card"/> */