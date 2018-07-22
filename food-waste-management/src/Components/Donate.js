import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import NavigationIcon from "@material-ui/icons/Navigation";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { geocode } from "../utils/utils";

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

const Transition = props => {
  return <Slide direction="up" {...props} />;
};

class Donate extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    open: false,
    latitude: 1.11,
    longitude: 2.23,
    loc: "Unknown"
  };

  askLocation = () => {
    if ("geolocation" in navigator) {
      const self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        geocode(position.coords.latitude, position.coords.longitude).then(
          result => {
            console.log(result.results[0].formatted_address);
            self.setState({
              loc: result.results[0].formatted_address
            });
          }
        );
      });
    } else {
      this.handleClickOpen();
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
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
            <Card
              style={{ marginLeft: "10px", marginRight: "10px" }}
              className={classes.card}
            >
              <CardContent>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id="name"
                        label="Your/Organisation Name"
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
                </form>
              </CardContent>
              <CardActions style={{ textAlign: "right", display: "block" }}>
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
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
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Your browser doesn't support geolocation feature. You can continue
              by only entering the full formatted address.
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
