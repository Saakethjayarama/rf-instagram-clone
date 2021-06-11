import React, { useEffect, useState } from "react";
import "./Header.css";

// Firebase
import { auth, signOut } from "../../Firebase";

// MUI
import { ExitToApp, Lock, Refresh, Add, LibraryAdd } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

// Modal
import CenteredModal from "../Modal";

import Login from "../Login";
import Signup from "../Signup";
import PostForm from "../PostForm";

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

  /**
   * * Authentication
   */
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setUser(user);
      } else {
        setAuthenticated(false);
      }
    });
    return () => {
      listener();
    };
  });

  const [isModalShown, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  /**
   * * Modal
   */

  const showLoginModal = () => {
    setModalContent(<Login close={() => setModalShow(false)} />);
    setModalShow(true);
  };

  const showSignupModal = () => {
    setModalContent(<Signup close={() => setModalShow(false)} />);
    setModalShow(true);
  };

  const showPostForm = () => {
    setModalContent(<PostForm close={() => setModalShow(false)} />);
    setModalShow(true);
  };

  return (
    <div className="Header">
      <CenteredModal show={isModalShown} onHide={() => setModalShow(false)}>
        {modalContent}
      </CenteredModal>
      <div className="Header__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="Header__logo"
        />
        {isAuthenticated ? (
          <div className="Header__icons">
            {/* Login Signup */}
            <div className="Header__icons__icon">
              <Refresh
                className={classes.icons}
                onClick={() => window.location.reload()}
              />
              <div className="Header__icons__info">Refresh</div>
            </div>
            <div className="Header__icons__icon">
              <LibraryAdd className={classes.icons} onClick={showPostForm} />
              <div className="Header__icons__info">AddPost</div>
            </div>
            <div className="Header__icons__icon">
              <ExitToApp className={classes.icons} onClick={() => signOut()} />
              <div className="Header__icons__info">SignOut</div>
            </div>
          </div>
        ) : (
          <div className="Header__icons">
            <div
              className="Header__icons__icon"
              onClick={() => showSignupModal()}
            >
              <Add className={classes.icons} />
              <div className="Header__icons__info">Signup</div>
            </div>
            <div
              className="Header__icons__icon"
              onClick={() => showLoginModal()}
            >
              <Lock className={classes.icons} />
              <div className="Header__icons__info">Login</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
