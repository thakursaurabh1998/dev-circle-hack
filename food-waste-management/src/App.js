import React, { Component } from "react";
import Sidenav from "./Components/Sidenav";
import "./App.css";
import Carousel from "./Components/Carousel";

class App extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <div
          xs={12}
          m={12}
          style={{
            background: "#000000",
            color: "#ffffff"
          }}
          className="header"
        >
          Food For Everyone
        </div>
        <Carousel />
      </div>
    );
  }
}

export default App;
