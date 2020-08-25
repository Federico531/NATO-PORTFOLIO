import React, { Component } from 'react'
import Modal from './Modal/Modal'
import Carousel from './Modal/Carousel'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor">
                <Modal  url={this.props.url} ide={this.props.id} text={this.props.text}>
                    <Carousel foto={this.props.url} id={this.props.id} > 
                    </Carousel>
                </Modal>
            </div>
        )
    }
}
