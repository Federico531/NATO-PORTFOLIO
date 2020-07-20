import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

//Components
import Split from '../components/Split'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'
import Card from '../components/Card'

//IMPORTAR LOS COMPONENTES UTILIZADOS ACA
export default class Index extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Split} >
                    <Split>
                        <Leftside >

                            <Card name="NATALIA" lastName="MUÑIZ" profession="Graphic Designer" />


                        </Leftside>
                        <Rightside />
                    </Split>
                </Route>
            </Router>
        );
    }
}