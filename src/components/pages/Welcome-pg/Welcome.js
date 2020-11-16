import React from 'react';
import Difficult from '../Welcome-pg/components/Difficult';
import CardShirt from '../Welcome-pg/components/CardShirt';
import Form from '../Welcome-pg/components/Form';
import HeaderWelcome from '../Welcome-pg/components/HeaderWelcome';
import Rules from '../Welcome-pg/components/Rules';
import StartGameBtn from '../Welcome-pg/components/StartGameBtn';


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

