import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Loading from "../HOC/Loading";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2),
    backgroundColor: "blue",
    fontFamily: "Montserrat, sans-serif !important"
  }
}));

const Feed = props => {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={spacing}>
        {[0, 1, 2].map(value => (
          <Grid key={value} item>
            <Paper className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
/* class Feed extends Component {
  render() {
    console.log(this.props);
    const { loadingTime } = this.props;
    return (
      <div className="feed">
        <p>Loading time {loadingTime} seconds</p>
      </div>
    );
  }
} */

export default Loading("contacts")(Feed);
