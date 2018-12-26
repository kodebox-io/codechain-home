import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./App.scss";
const WOW = require("wowjs");
const Rellax = require("rellax");

class App extends Component {
    public componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
    public render() {
        return (
            <Router>
                <ScrollToTop>
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
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
