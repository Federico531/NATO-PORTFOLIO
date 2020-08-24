import React, { Component } from 'react'
import '../portfolio1.css'
import Grid1x3 from '../components/Grid1x3'
//IMPORTAR COMPONENTE DE GRID 
export default class Portfolio extends Component {
    render() {
        return (
            <div className="hola">
                <Grid1x3 className="hola"/>
            </div>
        );
    }
}
