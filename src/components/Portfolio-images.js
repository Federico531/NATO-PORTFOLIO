import React, { Component } from 'react'

export default class PortfolioImage extends Component {
    render() {
        return (

            <div className="img__wrap">
            <img src={this.props.url} alt="buchon" />
            <p className="img__description"></p>
          </div>
        )
    }
}
