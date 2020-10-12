import React, { Component } from 'react'
import Modalresume from './Modal/Modalresume'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class  extends Component {
    render() {
        return (
            <div >
                <Modalresume url={this.props.tag}>
                    <img src="https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AGtpU0Q7kkDtX4TCIg6OkOH106g/content/parts/@.id==2/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=2" alt="profilepic"/>
                </Modalresume>
            </div>
        )
    }
}
