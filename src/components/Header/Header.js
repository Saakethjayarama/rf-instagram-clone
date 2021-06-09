import React from "react";
import "./Header.css";

// MUI icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockIcon from "@material-ui/icons/Lock";
import RefreshIcon from "@material-ui/icons/Refresh";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icons: {
    fontSize: theme.spacing(3),
    marginLeft: theme.spacing(2),
    cursor: "pointer",
    position: "relative",
  },
}));

function Header() {
  const classes = useStyles();

  const boolval = Math.random() >= 0.5;

  return (
    <div className="Header">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        className="Header__logo"
      />
      {boolval ? (
        <div className="Header__icons">
          {/* Login Signup */}
          <div className="Header__icons__icon">
            <AddIcon className={classes.icons} />
            <div className="Header__icons__info">Signup</div>
          </div>
          <div className="Header__icons__icon">
            <LockIcon className={classes.icons} />
            <div className="Header__icons__info">Login</div>
          </div>
        </div>
      ) : (
        <div className="Header__icons">
          {/* Login Signup */}
          <div className="Header__icons__icon">
            <RefreshIcon className={classes.icons} />
            <div className="Header__icons__info">Refresh</div>
          </div>
          <div className="Header__icons__icon">
            <ExitToAppIcon className={classes.icons} />
            <div className="Header__icons__info">Signout</div>
          </div>
        </div>
      )}

      {/* Refresh Logout */}
    </div>
  );
}

export default Header;
