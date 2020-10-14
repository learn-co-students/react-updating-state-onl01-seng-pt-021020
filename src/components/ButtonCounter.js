import React, { Component } from 'react'

export default class ButtonCounter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState.count+1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Button Counter</h1>
                <h2>This button has been clicked {this.state.count} {this.state.count === 1 ? 'time' : 'times'}</h2>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}