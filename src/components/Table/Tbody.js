import React, { Component } from 'react'

class Tbody extends Component {
    render() {
        return(
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}

export default Tbody;