import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Grid from "@material-ui/core/Grid";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    this.props.addData(this.state);
    // console.log(this.state);
  };

  addData = () => {
    this.props.addData();
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <Grid container>
          <Grid item xs={false} sm={4} />
          <Grid item xs={12} sm={4}>
            <div
              style={{
                width: "400px",
                // margin: "auto",
                marginTop: "20vh",
                background: "#F4F4F4",
                padding: "20px"
                // position: "absolute",
                // top: "30vh"
              }}
            >
              <img src={this.state.picture} alt={this.state.name} />
              <h2>Welcome {this.state.name}</h2>
              <h3> {this.state.email} </h3>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} />
        </Grid>
      );
    } else {
      fbContent = (
        <div style={{ marginTop: "30vh", textAlign: "center" }}>
          <FacebookLogin
            appId="292748748133212"
            autoLoad={true}
            fields="name, email, picture"
            //onClick = {this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}
