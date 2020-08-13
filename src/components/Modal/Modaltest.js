import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, } from 'reactstrap';
//background tiene que ser un array repasado por un for loop
var background = "https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" 
//https://www.youtube.com/watch?v=bSX3_oGrZSs    11:05
export default class Modalpopup extends React.Component {
    state = {
        abierto: false,
    }

    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto })
    }

    render() {
        const modalStyles = {
            position: "absolute",
            top: '-15em',
            minWidth: '80%',
            height: '100%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
            overflowY: 'hidden'

        }
        return (
            <>
                <div className="principal">
                    
                    <img className="image" onClick={this.abrirModal} style={{width:'100%', objectFit:"cover"}} src={this.props.url}/>
                    <div className="middle">
                        <div className="text">
                            {this.props.img_text}
                        </div>
                        </div>
                </div>
                <div className="secundario"></div>
                <Modal isOpen={this.state.abierto} style={modalStyles}>  {/*Estado que valida si se abre o se cierra el modal */}
                    <ModalHeader style={{justifyContent:'center'}}>
                        GALERIA DE FOTOS
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="password"></Label>
                            <Input type="text" id="password"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary'></Button>
                        <Button className="btn btn-danger" onClick={this.abrirModal} >
                            Cerrar
                    </Button>
                    </ModalFooter>

                </Modal>
            </>
        )
    }
}

