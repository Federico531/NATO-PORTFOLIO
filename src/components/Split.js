import React, { Component } from 'react'

  //No gutters sirve para que las mitades se unan perfectamente en la mitad sin margen
export default class Split extends Component {
    render() {
      return (        
        <div className="row no-gutters"> 
          {this.props.children}
        </div>
      )
    }
  }

 //row -> divide las mitades 
//no-gutters -> elimina sangria intermedia