import React, { Component } from 'react'

class Thead extends Component {
    render() {
        return(
            <thead>
                {this.props.children}
            </thead>
        );
    }
}

export default Thead;