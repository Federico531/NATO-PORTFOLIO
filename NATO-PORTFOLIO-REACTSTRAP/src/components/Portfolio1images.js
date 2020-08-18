import React, { Component } from 'react'
import Modal from './Modal/Modal'
import Carousel from './Modal/Carousel'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor">
                <Modal className='image' url={this.props.url}>
                    <Carousel foto={this.props.url} id={this.props.id}> 

                    </Carousel>
                </Modal>
            </div>
        )
    }
}
