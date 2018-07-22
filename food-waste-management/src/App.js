import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Donate from "./Components/Donate";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BottomNav from "./Components/BottomNav";
import NGO from "./Components/NGO";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            background: "#000000",
            color: "#ffffff"
          }}
          className="header"
        >
          <Grid container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={10}>
              Food For Everyone
            </Grid>
          </Grid>
        </div>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/donate" render={() => <Donate />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/ngo" render={() => <NGO />} />`
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
