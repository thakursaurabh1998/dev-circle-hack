import React, { Component } from "react";
import Facebook from "./facebook";

class Register extends Component {
  addData = (obj) =>{
    console.log(obj);
    this.props.addData(obj);
  }

  render() {
    return <Facebook addData={(data)=>this.addData(data)}/>;
  }
}

export default Register;
