// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    //define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    //update state here
    // let clicked=this.state.hasBeenClicked
    // if (clicked) {
    //   this.setState({
    //     hasBeenClicked: false
    //   },()=>console.log(this.state.hasBeenClicked))
    // } else {
    //   this.setState({
    //     hasBeenClicked: true
    //   },()=>console.log(this.state.hasBeenClicked))
    // }

    this.setState(previousState=>{
      return{
        hasBeenClicked: !previousState.hasBeenClicked
      }
    })

  };

  render () {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}</button>
      </div>
    );
  };
}

export default ClickityClick;
