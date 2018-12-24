import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./App.scss";

class App extends Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="Content">
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
