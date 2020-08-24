import React, { Component } from 'react'
import Modaltags from './Modal/Modaltags'
import Carousel from './Modal/Carousel'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class urlsidebar2 extends Component {
    render() {
        return (
            <div >
                <Modaltags tag={this.props.tag}>
                    <Carousel foto={this.props.url} id={this.props.id} > 
                    </Carousel>
                </Modaltags>
            </div>
        )
    }
}
