import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email"

export const mailFolderListItems = (
  <div>
    <ListItem component={Link} to="/" button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Homepage" />
    </ListItem>
    <ListItem component={Link} to="/NGO" button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="NGO" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem component={Link} to="/donate" button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Donate" />
    </ListItem>
    <ListItem component={Link} to="/contact" button>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
);
