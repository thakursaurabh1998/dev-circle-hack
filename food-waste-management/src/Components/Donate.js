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
import MenuItem from "@material-ui/core/MenuItem";
import NavigationIcon from "@material-ui/icons/Navigation";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

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
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
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
          <Grid style={{ marginTop: "20px" }} item xs={11} sm={6}>
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
            <Card className={classes.card}>
              <CardContent>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="name"
                    label="Your/Organisation Name"
                    className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    id="uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    required
                    id="required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    error
                    id="error"
                    label="Error"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                  />
                  <TextField
                    id="read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                  <TextField
                    id="helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                  />
                  <TextField
                    id="full-width"
                    label="Label"
                    InputLabelProps={{
                      shrink: true
                    }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="extendedFab"
                    aria-label="Location"
                    className={classes.button}
                  >
                    <NavigationIcon className={classes.extendedIcon} />
                    Current location
                  </Button>
                  <TextField
                    id="read-only-input"
                    label="Location"
                    defaultValue={this.state.loc}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </form>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </div>
    );
  }
}

Donate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donate);
