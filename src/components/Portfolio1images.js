import React, { Component } from 'react'

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor zoom">
                <img src={this.props.url} alt="Aca iria una imagen" className="image" />
                <div className="middle">
                    <div className="text"></div>
                </div>
            </div>
        )
    }
}
