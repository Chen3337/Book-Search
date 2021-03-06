import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './nav';
import Save from './save';
import Search from "./search";
function Container () {
    return (
        <Router>
            <Nav />
            <h1 style={{textAlign:'center'}}>(React) Google books search</h1>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/save" component={Save} />
                    <Route component={Search} />
                </Switch>
            </div>
        </Router>
    )
}

export default Container;