import React, { Component } from "react";
import Facebook from './facebook'

class Register extends Component {
  render() {
    return ( <div>
      <div
        style = {
          {
            position: "fixed",
            bottom: 100
          }
        } >
        <Facebook />
      </div>
    </div>);
  }
}

export default Register;
