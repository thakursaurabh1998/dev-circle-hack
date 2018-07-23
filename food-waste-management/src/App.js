import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Donate from "./Components/Donate";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BottomNav from "./Components/BottomNav";
import NGO from "./Components/NGO";
import Header from "./Components/Header";
import Facebook from "./Components/facebook"

import * as firebase from "firebase"


var config = {
  apiKey: "AIzaSyBpWKMJY5M-JCteqVJKcfYBjePIiauQr8I",
  authDomain: "dev-hack-49f85.firebaseapp.com",
  databaseURL: "https://dev-hack-49f85.firebaseio.com",
  projectId: "dev-hack-49f85",
  storageBucket: "dev-hack-49f85.appspot.com",
  messagingSenderId: "117240600813"
}


firebase.initializeApp(config)

const db = firebase.database().ref("donors")

var data = []

db.once('value').then(function (snapshot) {
  snapshot.forEach(function (child) {
    data.push(child.val());
    sort(data)
  });
});

function distance(a1, b1, a2, b2) {
  return Math.pow(Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2), 0.5)
}

var a = 40.66
var b = 27.77

function sort(data) {
  data.forEach(function (chunk) {
    chunk.distance = (distance(a, b, chunk.location.longitude, chunk.location.latitude))
  })
  data.sort(function (obj1, obj2) {
    console.log(obj1.distance - obj2.distance)
    return obj1.distance - obj2.distance
  })
}

console.log(data)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
        > <Facebook />
          <BottomNav />
        </div>
      </div>
    );
  }
}

export default App;
