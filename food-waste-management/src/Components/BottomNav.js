import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
// import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

const styles = {
  root: {
    width: "100vw"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: "home"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWillMount = () => {
    let value = window.location.pathname.split("/")[1];
    if (value === "") value = "home";
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Donate"
          value="donate"
          icon={<StarIcon />}
          component={Link}
          to="/donate"
        />
        <BottomNavigationAction
          label="NGO"
          value="ngo"
          icon={<PeopleIcon />}
          component={Link}
          to="/ngo"
        />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
