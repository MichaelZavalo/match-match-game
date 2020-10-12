import React from 'react';
import Heading from './Heading';

export default class HeaderWelcome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <header className='welcome-name-of-the-game'>
            <Heading name={this.props.name} firstTime={this.props.firstTime}/>
            </header>
        )
    }
}