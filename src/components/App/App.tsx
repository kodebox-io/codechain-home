import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.module.scss";

class App extends Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <span>test</span>
                    <Button>hi</Button>
                </header>
            </div>
        );
    }
}

export default App;
