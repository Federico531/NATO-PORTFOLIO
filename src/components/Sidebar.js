import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar1" style = {this.props.style}>
                <a href="/">
                    <h2 className="name1">
                        {this.props.name}
                    </h2>
                </a>
                <h5 className="name1">
                    <a href={this.props.url1}>{this.props.url1Tag}</a>  {/*aca iria la palabra "volver o siguiente"*/}
                    {/* Tambien href = {} "portfolio 1 o 2"*/}
                </h5>
            </div>
        )
    }
}
