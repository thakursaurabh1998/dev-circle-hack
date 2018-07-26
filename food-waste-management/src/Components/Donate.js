import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import NavigationIcon from "@material-ui/icons/Navigation";
import PropTypes from "prop-types";
import React, { Component } from "react";
import * as callsAPI from "../utils/utils";
import Dialog from "@material-ui/core/Dialog";

const Transition = props => {
  return <Slide direction="up" {...props} />;
};

const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Donate extends Component {
  state = {
    latitude: 1.11,
    longitude: 2.23,
    loc: "Unknown",
    open: false
  };

  askLocation = () => {
    if ("geolocation" in navigator) {
      const self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        callsAPI
          .geocode(position.coords.latitude, position.coords.longitude)
          .then(result => {
            console.log(result.results[0].formatted_address);
            self.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              loc: result.results[0].formatted_address
            });
          });
      });
    } else {
      alert(
        "Your browser doesn't support geolocation feature. You can continue by only entering the full formatted address."
      );
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const contact = e.target[1].value;
    const email = e.target[2].value;
    const address = e.target[3].value;
    const location = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };
    const date = new Date().getTime();
    callsAPI
      .postDonors({ name, contact, email, address, location, date })
      .then(result => {
        console.log(result);
        this.handleClickOpen();
      });
    for (let i = 0; i < e.target.length - 2; i++) e.target[i].value = "";
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={1} sm={2} />
          <Grid
            style={{
              marginLeft: "10px",
              marginTop: "10px",
              marginBottom: "10px"
            }}
            item
            xs={11}
            sm={6}
          >
            <Typography
              variant="headline"
              style={{ fontSize: "2em" }}
              component="h1"
            >
              Donate
            </Typography>
          </Grid>
          <Grid item xs={false} sm={3} />
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <form
              className={classes.container}
              noValidate
              autoComplete="off"
              onSubmit={this.submitForm}
            >
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
                className={classes.card}
              >
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id="name"
                        label="Your/Organisation Name"
                        defaultValue={this.props.name}
                        className={classes.textField}
                        onChange={this.handleChange("name")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={false} sm={8} />
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id="contact"
                        label="Contact number"
                        className={classes.textField}
                        onChange={this.handleChange("contact")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id="email"
                        label="Email id"
                        defaultValue={this.props.email}
                        className={classes.textField}
                        onChange={this.handleChange("email")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={false} sm={4} />
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="address"
                        label="Address"
                        InputLabelProps={{
                          shrink: true
                        }}
                        fullWidth
                        margin="normal"
                        helperText="Enter full formatted address"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="read-only-input"
                        label="Location"
                        value={this.state.loc}
                        margin="normal"
                        InputProps={{
                          readOnly: true
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        helperText="Provide us your accurate location so we can reach you easily. Click the current location button."
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ textAlign: "center", marginTop: "20px" }}
                    >
                      <Button
                        variant="contained"
                        onClick={this.askLocation}
                        color="default"
                        className={classes.button}
                      >
                        <NavigationIcon
                          color="primary"
                          className={classes.rightIcon}
                        />
                        Current Location
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions style={{ textAlign: "right", display: "block" }}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Confirm" || "Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Your data is updated
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Donate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donate);
