import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Avatar} from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';

import memories from "../../images/memories.png";
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("test user");
  // console.log(user);
  // console.log("test userName")
  // console.log(user.result.userName);
  // console.log(user.userName);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
        <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user? (<div className="classes.profile">
            <Avatar className={classes.purple} alt={user.result.userName} src={user.imageUrl}>{user.result.userName.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.userName}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
