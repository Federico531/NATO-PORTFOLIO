import React, {Component} from 'react';

export default class Leftside extends Component{
    render(){
      return(
        <div className= "col-md-6 no-gutters">
          <div className="leftside d-flex justify-content-center align-items-center">
           {this.props.children}
          </div>
        </div>
      )
    }
  }
