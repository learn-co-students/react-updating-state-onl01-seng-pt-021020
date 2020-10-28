import React from 'react';
import { render } from 'react-dom';

class ClickityClick extends React.Component {

    state = {
        hasBeenClicked: false
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true 
        }) 
    }
    
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>  
            </div>
               
        )
    }
}