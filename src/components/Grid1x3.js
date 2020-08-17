import React, { Component } from 'react'
import fotos1 from './data/fotos1'
import Portfolio1Image from './Portfolio1images'
import Sidebar from './Sidebar2'

//No gutters sirve para que las mitades se unan perfectamente en la mitad sin margen
export default class Grid1x3 extends Component {

  render() {

    const fotolist = fotos1.map(foto => {
      return (
        <Portfolio1Image url={foto.url} id={foto.id}/>
      
      )
    })

    return (
      <div className=" fondogris">

        <img className="guarda" src="https://mir-cdn.behance.net/v1/assets//1501ab05bb225341f2990946d5a6b18f/456e4149-1905-414c-abd0-5cab930dc27a_rwc_1171x0x10988x1708x13333.jpg?h=bbe01f3739f8da695c460bc2c2b6b76c" alt="profile" />

        <Sidebar name="NATALIA MUÑIZ" url1="/Portfolio" url1Tag="WORK">
          <div>
            <a className="urlsidebar2" href="/hola">Afiches - Expresionismo</a> <br />
            <a className="urlsidebar2" href="/hola">Serigrafia II</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Editorial - Revista</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño de flyers</a> <br />
            <a className="urlsidebar2" href="/hola">Expresionismo Pop</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño de logo y Aplicaciones</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Editorial</a> <br />
            <a className="urlsidebar2" href="/hola">Serigrafia I</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Editorial - MAMBA II</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño gráfico + Serigrafia</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Web</a> <br />
            <a className="urlsidebar2" href="/hola">Manual de Identidad Corporativa</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Editorial - MAMBA</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño Editorial - Libro</a> <br />
            <a className="urlsidebar2" href="/hola">Diseño de marca</a> <br />
            <a className="urlsidebar2" href="/hola">Papelería Corporativa</a> <br />
            <a className="urlsidebar2" href="/hola">Tipografía</a> <br />
          </div>
          <a href="https://www.behance.net/nataliamuniz"><i id="icon1" className="fab2 fab fa-behance"></i></a>
          <a href="https://www.linkedin.com/in/nataliamuniz/?originalSubdomain=ar"><i id="icon1" className="fab2 fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/nato.muniz/?hl=es-la"><i id="icon" className="fab2 fab fa-instagram"></i></a>

        </Sidebar>
        <div className="gallery1">
          {fotolist}
        </div>

      </div>

    )
  }
}