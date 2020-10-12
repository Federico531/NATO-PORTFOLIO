import React, { Component } from 'react'
import '../portfolio.css'
import Grid1x2x2 from '../components/Grid1x2x2'
//IMPORTAR COMPONENTE DE GRID 
export default class Portfolio extends Component {
    render() {
        return (
            <div className="flowhidden">
                <Grid1x2x2 />
            </div>
        );
    }
}

