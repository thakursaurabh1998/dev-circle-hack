import React, { Component } from "react";
import Sidenav from "./Components/Sidenav";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Donate from "./Components/Donate";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BottomNav from "./Components/BottomNav";
import NGO from "./Components/NGO";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Sidenav /> */}
        <div
          style={{
            background: "#000000",
            color: "#ffffff"
          }}
          className="header"
        >
          Food For Everyone
        </div>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/donate" render={() => <Donate />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/ngo" render={() => <NGO />} />
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
