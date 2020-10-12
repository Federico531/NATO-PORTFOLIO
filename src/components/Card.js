import React, { Component } from 'react'
export default class Card extends Component {
    render() {
        return (
                <div className="zoom">
                    <div>
                        <h1 className="title"> <b> {this.props.name + " " + this.props.lastName} </b></h1>
                    </div>
                    <h6 className="subtitle">{this.props.profession}</h6>
                    <div>
                        <div>
                            <a href="/Portfolio" >
                                <button className="portfolio-button"> PORTFOLIO </button>
                            </a>
                            <br />
                            <div className="redes">
                                <a href="https://www.behance.net/nataliamuniz"><i id="icon" className="fab1 fab fa-behance"></i></a>
                                <a href="https://www.linkedin.com/in/nataliamuniz/?originalSubdomain=ar"><i id="icon" className="fab1 fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/nato.muniz/?hl=es-la"><i id="icon" className="fab1 fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
