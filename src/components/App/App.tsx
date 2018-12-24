import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import NotFound from "../NotFound/NotFound";
import "./App.module.scss";

class App extends Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <span>test</span>
                        <Button>hi</Button>
                    </header>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
