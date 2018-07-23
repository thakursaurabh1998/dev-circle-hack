import React, { Component } from "react";
import Info from "./Info";
import Grid from "@material-ui/core/Grid";
import * as callsAPI from "../utils/utils";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Homepage extends Component {
  state = {
    feed: {},
    loading: true,
    sortByDistance: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount() {
    callsAPI.getDonors().then(feed => this.setState({ feed, loading: false }));
  }

  // sortDistance(){

  // }

  render() {
    const { loading, feed, sortByDistance } = this.state;
    const { classes } = this.props;
    const index = Object.keys(feed);
    if(sortByDistance){
      
    }
    return (
      <div style={{ textAlign: "center" }}>
        {loading ? (
          <CircularProgress
            style={{ marginTop: "25vh", color: "#2979ff" }}
            className={classes.progress}
            size={150}
          />
        ) : (
          <div>
            <div className="sort-btn">
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.sortByDistance}
                    onChange={this.handleChange("sortByDistance")}
                    value="sortByDistance"
                    color="primary"
                  />
                }
                label="Distance"
              />
            </div>
            <Grid container>
              {index.map((ind, i) => {
                const d = feed[ind];
                return (
                  <Grid key={i} item xs={12} sm={4}>
                    <Info
                      name={d.name}
                      date={new Date(d.date).toDateString().slice(4)}
                      email={d.email}
                      contact={d.contact}
                      address={d.address}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Homepage);
