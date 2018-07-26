import React, { Component } from "react";
import Info from "./Info";
import Grid from "@material-ui/core/Grid";
import * as utils from "../utils/utils";
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
    sortByDistance: false,
    lat: undefined,
    lng: undefined
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
    // this.setState({
    //   feed: JSON.parse(
    //     `[{"address":"#393/6 Ground Floor Gali No 4 Adarsh Nagar, Mundi Kharar, Kharar","contact":"08427650927","date":"2018-07-23T13:33:03.316Z","email":"thakursaurabh1998@gmail.com","id":0,"location":{"latitude":53,"longitude":100.7794179},"name":"Door"},{"address":"#393/6 Ground Floor Gali No 4 Adarsh Nagar, Mundi Kharar, Kharar","contact":"12423894","date":1532353210582,"email":"thakursaurabh1998@gmail.com","id":1,"location":{"latitude":30.7333148,"longitude":6.7794179},"name":"Pass"},{"address":"#393/6 Ground Floor Gali No 4 Adarsh Nagar, Mundi Kharar, Kharar","contact":"3243252345","date":1532360798276,"email":"thakursaurabh1998@hotmail.com","location":{"latitude":75.7333148,"longitude":31.7794179},"name":"Item"}]`
    //   ),
    //   loading: false
    // });
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
    const { loading, feed } = this.state;
    const { classes } = this.props;
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
              {feed.sort((a, b) => b.distance - a.distance).map((d, i) => {
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
