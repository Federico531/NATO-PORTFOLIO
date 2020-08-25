import React, { Component } from 'react'
import Modalresume from './Modal/Modalresume'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class  extends Component {
    render() {
        return (
            <div >
                <Modalresume url={this.props.tag}>
                    <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/56643551/900" alt="profilepic"/>
                </Modalresume>
            </div>
        )
    }
}
