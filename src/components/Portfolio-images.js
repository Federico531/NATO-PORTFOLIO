import React, { Component } from 'react'

export default class PortfolioImage extends Component {
    render() {
        return (
            <div className="img__wrap">  {/*Este contenedor no esta asignado */}
                <a href='/portfolio1'>
                    <img id={this.props.id} className="zoom" src={this.props.url} alt="buchon" />
                </a>
            </div>

        )
    }
}
