import React, { useState, useEffect } from "react";
import "./App.css";
import "typeface-roboto";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
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

  return <div> {contacts.length} </div>;
};

export default App;
