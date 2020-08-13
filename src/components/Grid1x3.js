
import React, { Component } from 'react'

//COMPONENTS
import Portfolio1Image from './Portfolio1images'
import Sidebar from './Sidebar2'

//No gutters sirve para que las mitades se unan perfectamente en la mitad sin margen
export default class Grid1x3 extends Component {
  render() {

    // Loop para crear todos los elementos de la grilla
    var rows = [];
    for (var i = 1; i <= 18; i++) {
      //El children podria llevar "key"
      rows.push(<img src='https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed' alt={i} id={i} />);
    }

    /* usar {rows} */

    return (
      <div className=" fondogris">

          <img className="guarda" src="https://mir-cdn.behance.net/v1/assets//1501ab05bb225341f2990946d5a6b18f/456e4149-1905-414c-abd0-5cab930dc27a_rwc_1171x0x10988x1708x13333.jpg?h=bbe01f3739f8da695c460bc2c2b6b76c" alt="profile"/>

        <Sidebar name="NATALIA MUÑIZ" url1="/Portfolio" url1Tag="WORK">

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

          <a href="https://www.behance.net/nataliamuniz"><i id="icon1" className="fab2 fab fa-behance"></i></a>
          <a href="https://www.linkedin.com/in/nataliamuniz/?originalSubdomain=ar"><i id="icon1" className="fab2 fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/nato.muniz/?hl=es-la"><i id="icon" className="fab2 fab fa-instagram"></i></a>

        </Sidebar>
        <div className="gallery1">
          
          <Portfolio1Image id="img1position" img_text="HOLA" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <Portfolio1Image id="img2position" img_text="COMO VA" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />
          <Portfolio1Image id="img3position" img_text="Bien " url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed" />
          <Portfolio1Image id="img4position" img_text="IN A COLD SWEAT " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img1position" img_text="HOLA" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <Portfolio1Image id="img2position" img_text="COMO VA" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />
          <Portfolio1Image id="img3position" img_text="Bien " url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed" />
          <Portfolio1Image id="img4position" img_text="IN A COLD SWEAT " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img1position" img_text="HOLA" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <Portfolio1Image id="img2position" img_text="COMO VA" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />
          <Portfolio1Image id="img3position" img_text="Bien " url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed" />
          <Portfolio1Image id="img4position" img_text="IN A COLD SWEAT " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img1position" img_text="HOLA" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <Portfolio1Image id="img2position" img_text="COMO VA" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />
          <Portfolio1Image id="img3position" img_text="Bien " url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed" />
          <Portfolio1Image id="img4position" img_text="IN A COLD SWEAT " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          <Portfolio1Image id="img1position" img_text="HOLA" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <Portfolio1Image id="img2position" img_text="COMO VA" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />
          <Portfolio1Image id="img3position" img_text="Bien " url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed" />
          <Portfolio1Image id="img4position" img_text="IN A COLD SWEAT " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72" />
          <Portfolio1Image id="img5position" img_text="UH " url="https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82" />
          <Portfolio1Image id="img6position" img_text="I DONT CARE" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08" />
          {/* {rows} */}
        </div>
        
      </div>
      
    )
  }
}