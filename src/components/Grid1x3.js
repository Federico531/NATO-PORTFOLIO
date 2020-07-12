import React, { Component } from 'react'


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
      <div className="containera">
        <div className="gallery1">
          <div className="sidebar1">
            <a href="/">
              <h2 className="name1">
                NATALIA MUÑIZ
              </h2>
            </a>
            <h5 className="name">
              <a href="/portfolio">ATRAS</a>
            </h5>
          </div>

          <div className="contenedor">
            <img src='https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          <div className="contenedor">
          <img src='https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          <div className="contenedor">
          <img src='https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          <div className="contenedor">
          <img src='https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_600.jpg?h=2a5c105223d1d3414a67407392128b72' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          <div className="contenedor">
          <img src='https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/b23930fb-c864-4878-97af-6a58eeff36c8_rw_1200.jpg?h=39efd7e4c49b875c929b19827adf4c82' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          <div className="contenedor">
          <img src='https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/af5611f0-1bc7-4932-a392-f6e97358c272_rw_1920.jpg?h=9f9c52b429985d26e9376cd31f7d6b08' alt="buchon" className="image" />
            <div className="middle">
              <div className="text"></div>
            </div>
          </div>
          {/* <img src='https://pro2-bar-s3-cdn-cf4.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/f90df92f-7147-4a48-90ed-9f1ce7e3d7f4_rw_600.jpg?h=d70759b380fccc8019e8624ea47efae6' alt="buchon" />
          <img src='https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6' alt="buchon" />
          <img src='https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_1920.jpg?h=84f010fd62ccb7e88d911010a6b7948f' alt="buchon" /> */}

          {/* {rows} */}
        </div>
      </div>

    )
  }
}



