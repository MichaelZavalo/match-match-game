import React from 'react';
import Input from './Input';

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {firstNameValue: '', lastNameValue: '', emailName: ''};
        this.changeFirstNameValue = this.changeFirstNameValue.bind(this);
        this.changeLastNameValue = this.changeLastNameValue.bind(this);
        this.changeEmailValue = this.changeEmailValue.bind(this);
    }
    
    changeFirstNameValue(event){
        return this.setState({firstNameValue: event.target.value});
    }

    changeLastNameValue(event){
        return this.setState({lastNameValue: event.target.value});
    }

    changeEmailValue(event){
        return this.setState({emailName: event.target.value});
    }

    render(){
        return (
            <form className="welcome-form">
                <Input className="welcome-form-input" onChange={this.changeFirstNameValue} value={this.state.firstNameValue} placeholder="First name"/>
                <Input className="welcome-form-input" onChange={this.changeLastNameValue} value={this.state.lastNameValue} placeholder="Last name"/>
                <Input className="welcome-form-input" onChange={this.changeEmailValue} value={this.state.emailName} placeholder="Email name"/>
            </form>
        )
    }
}