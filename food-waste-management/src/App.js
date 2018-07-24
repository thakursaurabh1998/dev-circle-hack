import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Donate from "./Components/Donate";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BottomNav from "./Components/BottomNav";
import Header from "./Components/Header";
import Register from "./Components/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/donate" render={() => <Donate />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/register" render={() => <Register />} />`
        <div
          style={{
            position: "fixed",
            bottom: "0",
            zIndex: "200"
          }}
        >
          <BottomNav />
        </div>
      </div>
    );
  }
}

export default App;
