import React from 'react';

export default class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    render(){
        return (
            <input className={this.props.className} onChange ={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder}></input>
        )
    }
}