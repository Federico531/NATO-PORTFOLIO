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
                <div className="sidebar1" >
                    <img className="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCGVuESy6A5kRnXfdDJoKW2W6L4snIpnh_vg&usqp=CAU" alt= "aca iria un loguito"/>
                    <a href="/">
                        <h1 className="nametitle1">
                            {this.props.name}
                        </h1>
                    </a>

                    <a href={this.props.url1} >
                        <h1 className="subtitle1">
                            {this.props.url2Tag}
                        </h1>
                    </a>
                    <a href={this.props.url1} >
                        <h1 className="url1-1">
                            {this.props.url3Tag}
                        </h1>
                    </a>
                    <a href={this.props.url1} >
                        <h1 className="url1-2">
                            {this.props.url4Tag}
                        </h1>
                    </a>



                    <div className="urlsidebar2">{this.props.children}</div>
                </div>
            </div>
        )
    }
}
