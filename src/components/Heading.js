import React from 'react';

export default class Heading extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: "Welcome to MMG" };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue() {
        return this.setState({value: `Welcome ${this.props.name} to MMG`})
    }

    render(){
        if(!this.props.firstTime){
            setTimeout(() => this.changeValue(),0);  
        return (
            <h2 className="main-name">{this.state.value}</h2>
        )}else {
            return <h2 className="main-name">{this.state.value}</h2>
        }
    }
}