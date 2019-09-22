import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Feed from "./components/Feed";
import Container from "@material-ui/core/Container";
import PhoneImg from "./assets/images/iPhones.png";
const useStyles = makeStyles(theme => ({
  grid: {
    width: "100%",
    margin: 0,
    height: "100%"
  },
  text: {
    fontFamily: "Montserrat",
    lineHeight: 1.4,
    color: "#91a5b9",
    fontWeight: "bold",
    fontSize: "2.5rem",
    width: "70%"
  },
  subText: {
    color: "#4a4a4a",
    fontFamily: "Montserrat",
    fontSize: "1rem",
    marginTop: ".7em"
  },
  container: {
    background: "green",
    padding: 0
  },
  bar: {
    backgroundColor: "#FFF"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: "Montserrat"
  },
  title: {
    flexGrow: 1,
    color: "#4a4a4a",
    fontFamily: "Montserrat"
  },
  backG: {
    backgroundColor: "blue"
  },
  jumbotron: {
    background: "rgb(229,233,236)",
    background:
      "radial-gradient(circle, rgba(229,233,236,1) 0%, rgba(255,255,255,1) 100%)",
    height: "50vh"
  },
  innerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    height: "100%"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2em",
    justifyContent: "center",
    width: "70%"
  },
  imgElement: {
    width: "34rem",
    [theme.breakpoints.down("xs")]: {
      width: "20rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "23rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "29rem"
    },
    [theme.breakpoints.up("lg")]: {
      width: "34rem"
    }
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  imgContainer: {
    alignSelf: "flex-end"
  }
}));

const App = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.randomuser.me/?results=20");
      const users = await res.json();
      const parsed =
        (await users) &&
        users.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }));
      setContacts(parsed);
    };
    getData();
  }, []);

  return (
    <div>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="xl">
        <Typography component="div" className={classes.jumbotron}>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item sm={6}>
              <Container className={classes.innerHeader}>
                <div className={classes.headerContainer}>
                  <Typography className={classes.text} variant="h4">
                    Be sure to never smoke again
                  </Typography>
                  <Typography className={classes.subText}>
                    It relies on evidence-based smoking cessation scientific
                    methods and helps you on a daily basis with positivity and
                    kindness.
                  </Typography>
                </div>
              </Container>
            </Grid>
            <Grid className={classes.gridContainer} item sm={6}>
              <img className={classes.imgElement} src={PhoneImg} />
            </Grid>
          </Grid>
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Feed contacts={contacts} />
      </Container>
      <div></div>
    </div>
  );
};

export default App;
