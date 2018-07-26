import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    maxWidth: 400,
    maxHeight: 400,
    height: 250
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  render() {
    const {
      classes,
      name,
      date,
      email,
      contact,
      address,
      foodQuantity,
      foodType
    } = this.props;

    return (
      <div
        style={{
          margin: "10px"
        }}
      >
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {name[0]}
              </Avatar>
            }
            style={{ textAlign: "left" }}
            title={name}
            subheader={date}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} style={{ marginBottom: "5px" }}>
                <Typography component="p">{address}</Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  style={{ color: "#000" }}
                  variant="outlined"
                  disabled
                  className={classes.button}
                >
                  Food: {foodType}
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  style={{ color: "#000" }}
                  variant="outlined"
                  disabled
                  className={classes.button}
                >
                  Quantity: {foodQuantity}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <a style={{ color: "#0000008a" }} href={`tel:${contact}`}>
                <PhoneIcon />
              </a>
            </IconButton>
            <IconButton aria-label="Share">
              <a style={{ color: "#0000008a" }} href={`mailto:${email}`}>
                <MailIcon />
              </a>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
