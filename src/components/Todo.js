import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <li>{this.props.item.task}</li>
            </div>
        )
    }
}
