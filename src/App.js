import React, { Component } from 'react'
//contenedor
import { BrowserRouter as Router, Route } from 'react-router-dom'
//Nos permite crear URL en nuestra app y con route especificamo esas rutas

//Routes
import Portfolio from './routes/Portfolio'
import Portfolio1 from './routes/Portfolio1'

//SHIFT + ALT + F = FORMAT O F1 --> FORMAT DOCUMENT
//ESTE ES EL INDEX COMPLETO

class App extends Component {

    render() {
        return (
            <Router >
                <Route path="/" exact component={Portfolio} />
                <Route path="/portfolio1" exact component={Portfolio1} />
            </Router>
        );
    }
}

export default App;