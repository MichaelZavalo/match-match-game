import React from 'react';
import mainData  from '../../../data/data';
import Row from '../components/Row';
import generate from '../components/generate';

const {difficulty , arrOfСards, shirts } = mainData;

export default class Field extends React.Component{
    constructor(props) {
        super(props);
        this.state = {generateField: null,shirt: null};
    }

    componentDidMount(){
       return this.setState({generateField: generate(arrOfСards), shirt: shirts.first},()=> console.log(this.state.generateField))
    }

    render(){
        
        return (
            <div className="game-field">
                {(this.state.generateField !== null) && (this.state.generateField.map((row,rowIndex) => <Row row={rowIndex} item={row} key={rowIndex} shirtOfCards={this.state.shirt}/>))}
            </div>
        )
    }
}