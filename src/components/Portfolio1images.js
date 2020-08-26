import React, { Component } from 'react'
import Modal from './Modal/Modal'
import Carousel from './Modal/Carousel'
import BackToTop from "react-back-to-top-button";



//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor">
                <Modal url={this.props.url} ide={this.props.id} text={this.props.text}>

                    <Carousel foto={this.props.url} id={this.props.id} >
                    <BackToTop
                        showOnScrollDown
                        showAt={1000}
                        speed={1000}
                        easing="easeInOutQuint"
                    >
                        <span style={{ color: "red" }}>scroll up</span>
                    </BackToTop>
                    </Carousel>
                </Modal>
            </div>
        )
    }
}
