import React, {Component} from 'react';

class ClickityClick extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      count: 0
    }
  }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
 
export default ClickityClick;
