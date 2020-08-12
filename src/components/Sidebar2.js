import React, { Component } from 'react'

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
        return (
            <div>
                <div className="sidebar2" >
                    <img className="profilepic" src="https://mir-s3-cdn-cf.behance.net/user/115/0b7500330352845.5eebf7bbd1eef.jpg" alt="FOTO DE PERFIL" />
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
