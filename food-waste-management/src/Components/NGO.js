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
import Dialog from "./Dialog";

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

class NGO extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    latitude: 1.11,
    longitude: 2.23,
    loc: "Unknown"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
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
              For NGOs
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
        <Dialog>
          Your browser doesn't support geolocation feature. You can continue by
          only entering the full formatted address.
        </Dialog>
      </div>
    );
  }
}

NGO.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NGO);
