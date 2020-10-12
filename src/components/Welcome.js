import React from 'react';
import Difficult from './Difficult';
import CardShirt from './CardShirt';
import Form from './Form';
import HeaderWelcome from './HeaderWelcome';
import Rules from './Rules';
import StartGameBtn from './StartGameBtn';
import '../App.css';

export default class Welcome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {firstTime: true};
        this.onClick = this.onClick.bind(this);
    }

    searchInfoAboutFirstTime(){
        
    }

    setPlayerInLocalStorage(){
    }

    onClick(){
        this.props.history.push('/game');
    }

    render(){
        return (
            <div className='welcome'>
                <HeaderWelcome 
                name="player"
                firstTime={this.state.firstTime}
                />
                {this.state.firstTime && <Form />}
                <Difficult />
                <CardShirt />
                <Rules />
                <StartGameBtn 
                onClick = {this.onClick}/>
            </div>
        )
    }
}

