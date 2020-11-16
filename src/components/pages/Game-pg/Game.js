import React from 'react';
import Timer from '../Game-pg/components/Timer';
import CounterOfTirns from '../Game-pg/components/CounterOfTirns';
import Field from '../Game-pg/components/Field';
import RestartBtn from '../Game-pg/components/RestartBtn';
import NewGameBtn from '../Game-pg/components/NewGameBtn';
import GameHeader from '../Game-pg/components/GameHeader';

export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='game'>
                <GameHeader />
                <div className="game-header">
                    <Timer />
                    <CounterOfTirns />
                </div>
                <Field />
                <div className="game-bottom">
                    <RestartBtn />
                    <NewGameBtn />
                </div>
            </div>
        )
    }
}