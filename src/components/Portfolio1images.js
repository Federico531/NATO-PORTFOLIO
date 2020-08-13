import React, { Component } from 'react'
import Modaltest from './Modal/Modaltest'

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor ">
                <Modaltest url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830">
                {/* <Modal> */}
                    <img src={this.props.url} alt="Aca iria una imagen" className="image" id={this.props.id} />
                    <div className="middle">
                        <div className="text">
                            {this.props.img_text}
                        </div>
                    
                    
                </div>
                </Modaltest>
            </div>
        )
    }
}
