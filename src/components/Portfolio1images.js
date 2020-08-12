import React, { Component } from 'react'
import Modal from './Modal/modal'
export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor ">
                {/* <Modal> */}
                    <img src={this.props.url} alt="Aca iria una imagen" className="image" id={this.props.id} />
                    <div className="middle">
                        <div className="text">
                            {this.props.img_text}
                        </div>
                    
                    
                </div>
                {/* </Modal> */}
            </div>
        )
    }
}
