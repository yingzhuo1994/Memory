import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Avatar} from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("test");
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?._id;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user? (<div className="classes.profile">
            <Avatar className={classes.purple} alt={user.userName} src={user.imageUrl}>{user.userName.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.userName}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
