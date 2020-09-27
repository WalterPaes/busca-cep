import React, { Component } from 'react'

class Card extends Component {
    render() {
        return(
            <div className="card bg-light mb-3 col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;