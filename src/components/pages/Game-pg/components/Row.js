import React from 'react';
import Card from '../components/Card';

export default class Row extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
    
        return (
            <div className="row">
               {this.props.item && this.props.item.map((card,cardIndex) => <Card  card={cardIndex} item={card} key={cardIndex} shirtOfCards={this.props.shirtOfCards}/>)}
            </div>
    )}
}