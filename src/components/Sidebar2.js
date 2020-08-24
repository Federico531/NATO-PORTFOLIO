import React, { Component } from 'react'
import Profilepic from './Profilepic.js'
import profilepic from './data/profilepic'
export default class Sidebar extends Component {

    /*
    PRUEBA DE COMO HARIA EL CAMBIO DE COLOR DEL SIDE BAR z
     function(){
         var colorin;
         if(this.props.url == "/Portfolio1"){
             colorin = "{{backgroundColor:black}}"; 
         }else if(this.props.url == "/Portfolio"){
             colorin= "{backgroundColor:black}";
         }
     }
    
    */

    render() {

        const profilepicture = profilepic.map(foto => {
            return (
              <Profilepic src="https://mir-s3-cdn-cf.behance.net/user/115/cec80f330352845.5f380761a7f97.jpg" url={foto.url} />
            )
          })

        return (
            <div>
                <div className="sidebar2" >
                {profilepicture}
                    <a href="/">
                        <h1 className="nametitle2">
                            {this.props.name}
                        </h1>
                    </a>

                    <a href={this.props.url1} >
                        <h1 className="subtitle2">
                            {this.props.url1Tag}
                        </h1>
                    </a>
                    <a href={this.props.url1} >
                        <h1 className="name3">
                            {this.props.url2Tag}
                        </h1>
                    </a>


                    <div className="urlsidebar2">{this.props.children}</div>
                    
                </div>
            </div>
        )
    }
}
