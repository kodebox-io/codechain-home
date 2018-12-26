import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contribute from "../Contribute/Contribute";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Platform from "../Platform/Platform";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Source from "../Source/Source";
import "./App.scss";

class App extends Component {
    public render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className="App">
                        <Header />
                        <div className="Content">
                            <Switch>
                                <Route exact={true} path="/" component={Home} />
                                <Route path="/platform" component={Platform} />
                                <Route path="/source" component={Source} />
                                <Route
                                    path="/contribute"
                                    component={Contribute}
                                />
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
