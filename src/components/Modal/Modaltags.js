/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal,ModalBody } from 'reactstrap';

const ModalExample = (props) => {



  //estos seran los proptypes?
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);
  const [keyboard] = useState(true);
  const toggle = () => setModal(!modal);



  return (
    <div>
      {/* ESTAS SON LAS IMAGENES DE LA RUTA 2*/}

      {/* ESTAS SON LOS LINKS DE LA RUTA  */}
      <b id={props.id} className='urlsidebar2' onClick={toggle} src={props.url} alt="whatever">{props.tag} </b>

      <div className="middle">
        <div className="text">hola  {/*EL CHILDREN PUEDE SER UNA PROPIEDAD EN PORTFOLIO 1 Y GRID 1X3 */}
          {/* {props.img_text} */}
        </div>
      </div>

      <Modal style={{ marginTop: '5%', minWidth: '90%' }} isOpen={modal} toggle={toggle} className='modalito' backdrop={backdrop} keyboard={keyboard}>
        <ModalBody style={{ padding: '0' }}>
          {props.children}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;