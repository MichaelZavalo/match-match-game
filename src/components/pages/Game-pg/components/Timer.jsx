import React from 'react';

export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {startDate : new Date(), mseconds: 0 };
        setInterval(() => {
            this.setState({mseconds :  new Date() - this.state.startDate});
        }, 1000);
    }

    formateDate() {
        let hour = Math.round(this.state.mseconds / 3600000);
        let sumOfRemainderHour = Math.round(this.state.mseconds % 3600000);
        let minute = Math.round(sumOfRemainderHour / 60000);
        let sumOfRemainderMinute = Math.round(sumOfRemainderHour % 60000);
        let second = Math.round(sumOfRemainderMinute / 1000);
        return `${hour}h : ${minute}m : ${second}s`;
    }

    render(){
        return (
            <>
                <p className="game-timer">Timer {this.formateDate()}</p>
            </>
        )
    }
}