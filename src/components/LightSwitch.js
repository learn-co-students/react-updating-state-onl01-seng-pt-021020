import React, { Component } from 'react'

export default class LightSwitch extends Component {
    constructor() {
        super()
        this.state = {
            toggled: false 
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Light Switch</h1>
                <h2>The light switch is currently {this.state.toggled ? 'ON' : 'OFF'}</h2>
                <button onClick={this.handleClick}>Switch</button>
            </div>
        )
    }
}