import React, { Component } from 'react'
import PortfolioImage from './Portfolio-images'
import Sidebar from './Sidebar1'
import fotolist from './data/automaticImages'



const isOdd = require('is-odd')

//No gutters sirve para que las mitades se unan perfectamente en la mitad sin sangria en el medio
export default class Grid1x2x2 extends Component {
  render() {

    // >>> CAMBIA IMAGENES AUTOMATICAMENTE <<<< 
    //PODRIA TAMBIER USAR EL MAP DE FOTOS 1 PARA NO REPETIR 
    var imageSources =
      [
        "https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830",
        "https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_1200.jpg?h=fcb2fcc708f7e7fb646125696060db86",
        "https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/128e337d-3a2c-4cd1-b639-1a37918a4a11_rw_1920.jpg?h=84f010fd62ccb7e88d911010a6b7948f ",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==2/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=2",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==7/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=7",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==6/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=6",
        //"me falta cami ayanami",
        "https://pro2-bar-s3-cdn-cf1.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/2eca717c-5dd8-40a9-a8e7-75bd76875c25_rw_1920.jpg?h=607010271eb7dd8cb710cf2cca34d24f",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==4/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=4",
        "https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/1928fe89-5341-42db-84ac-9fed17488cc7_rw_1920.jpg?h=9c149a4e690251afba7b17b4b7cc6ccf",
        "https://pro2-bar-s3-cdn-cf3.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/ee74f94b-32ac-45b8-88d1-ce2b436bb3e6_rw_1200.jpg?h=d84cdcf51133f42bc25b17b45ab89f2f",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==3/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=3",        "https://pro2-bar-s3-cdn-cf5.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/6d99e4a6-2bde-454d-9723-7ad621395217_rw_1920.jpg?h=765e73a839910a0a200f682a542a9a28",
        "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-Zkxqo_6z4sEgpLtcuZ2D1V--IUuX7nXfJGyk7vQRW0L525tdkWOZdsHKoIpJCj0tC3OAiiZ-n-vckIpzVHUjG6tgezLTFbuWDfCaMFLPdGs/messages/@.id==AOaz7z4nFWVdX4SezAAq-BQOb4k/content/parts/@.id==9/thumbnail?appId=YMailNorrin&downloadWhenThumbnailFails=true&pid=9",
        "https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/d8904680-65f8-4095-a859-f75ce40e888c_rw_1200.png?h=b8b338642688fb66cdba297d33f16545",
        //Abecedario (centrar con object-position)
        //"https://pro2-bar-s3-cdn-cf.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/bd9631f3-60fc-4c1c-a158-91a30ddac5e4_rw_1920.jpg?h=5cc66c4cfa702abccfb83d238540139d",

      ]


    var index = 0;
    setInterval(function () {
      if (index === imageSources.length - 1) { //ARREGLAR PARA QUE LA ULTIMA IMAGEN NO SE MUEVA 2 VECES A LO ULTIMO
        index = 0
      }
      if (!isOdd(index)) {
        document.getElementById("imgL").src = imageSources[index];
        index++
      }
      else if (isOdd(index)) {
        document.getElementById("imgR").src = imageSources[index];
        index++
      }
    }, 1500);

    return (

      <div className="flowhidden">

        <Sidebar
          name="NATALIA MUÑIZ"
          url1="/Portfolio1"
          url2Tag="GRAPHIC DESIGNER"
          url3Tag="Projects"
          url4Tag="Contact">

          <div style={{ marginTop: 100 }}>
            <a href="https://www.behance.net/nataliamuniz"><i id="icon1" className="fab2 fab fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/nataliamuniz/?originalSubdomain=ar"><i id="icon1" className="fab2 fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/nato.muniz/?hl=es-la"><i id="icon" className="fab2 fab fa-instagram"></i></a>
          </div>
        </Sidebar>
        <div className="gallery">

          <PortfolioImage id="imgL" url="https://pro2-bar-s3-cdn-cf2.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/31a78818-ad19-4097-bb06-bc354ef26cf2_rw_1920.jpg?h=fc61aa3d02836cd5688b97e4c6bed830" />
          <PortfolioImage id="imgR" url="https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6" />


          {/* {rows} */}
        </div>
      </div>
    )
  }
}



