// Code ClickityClick Component Here
//state is only for data that we know is going to change in the component,
//and is visible in the UI

//instead of directly modifying the state using this.state, we use this.setState()
//this way we can tell React that a component state has changed
//component will know to rerender

//For example, let's say we have a component with a button, and a bit of text to indicate whether that button has been pressed yet:

import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    //let's define the initial state
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    //To update our state, we use this.setState() and pass in an object.
    //This object will get merged with the current state. //
    //When the state has been updated, our component re-renders automatically.
    this.setState({
      hasBeenClicked: true
    })
    console.log(this.state.hasBeenClicked); //false
    //() => console.log(this.state.hasBeenClicked)) //true
  }

  //The console output says false... but we just set it to true! What is this madness?
  //State changes, however instant they might appear, happen asynchronously. If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state. In code:

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
export default ClickityClick;
