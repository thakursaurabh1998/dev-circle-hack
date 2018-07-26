import React, { Component } from "react";
import Info from "./Info";
import Grid from "@material-ui/core/Grid";
import * as utils from "../utils/utils";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import splash from "../Img/splash.jpg";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Homepage extends Component {
  state = {
    feed: {},
    loading: true,
    sortByDistance: false,
    lat: undefined,
    lng: undefined,
    wall: this.props.wall
  };

  handleChange = name => event => {
    const { feed } = this.state;
    const check = event.target.checked;
    this.setState({ [name]: check });
    this.askLocation()
      .then(({ lat, lng }) => {
        this.setState({ lat, lng });
        const newFeed = utils.distanceProp(feed, { lat, lng });
        this.setState({ feed: newFeed });
      })
      .catch(err => {
        this.setState({ [name]: !check });
        alert(err);
      });
  };

  componentDidMount() {
    utils.getDonors().then(feed => this.setState({ feed, loading: false }));
    const self = this;
    setTimeout(() => {
      self.props.wallChange();
      this.setState({ wall: true });
    }, 2000);
  }

  askLocation = () => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      } else {
        resolve(
          "Your browser doesn't support geolocation feature. You can continue by only entering the full formatted address."
        );
      }
    });
  };

  render() {
    const { loading, feed, wall } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {wall === false && (
          <img
            src={splash}
            style={{
              height: "100vh",
              position: "absolute",
              zIndex: 2000
            }}
          />
        )}
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
                  label="Nearest First"
                />
              </div>
              <Grid container>
                {feed.sort((a, b) => a.distance - b.distance).map((d, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4}>
                      <Info
                        name={d.name}
                        date={new Date(d.date).toDateString().slice(4)}
                        email={d.email}
                        contact={d.contact}
                        address={d.address}
                        foodType={d.foodType}
                        foodQuantity={d.foodQuantity}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Homepage);
