import React from 'react';

export default class CardShirts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {first: "one", second: "two", third: "three"};
    }

    render(){
        return (
            <div className="welcome-rules">
                <h3 className="welcome-rules-h3">Rules</h3>
                <p className="welcome-rules-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae alias fugiat dolores dicta suscipit aut facilis dolor tempora dolore qui eius, earum voluptatum, cum natus explicabo commodi molestiae nobis.</p>
            </div>
        )
    }
}