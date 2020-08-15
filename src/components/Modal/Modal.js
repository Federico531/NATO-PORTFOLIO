/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  }

  return (
    <div>

      <img id={props.id} className='image' onClick={toggle} src={props.url} alt="whatever" />
      <div className="middle">
        <div className="text">hola
                        {/* {props.img_text} */}
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader style={{ paddingLeft: '42.5%' }} toggle={toggle}>Galeria</ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <div style={{ marginRight: '44%' }}>
            <Button color="danger" onClick={toggle} className='text-left'>Volver</Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;