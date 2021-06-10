import React, { useState } from "react";
import "./Login.css";

// Bootstrap
import { Modal } from "react-bootstrap";
import { LinearProgress } from "@material-ui/core";

function Login() {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <Modal.Header className="Login__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="Login__logo"
        />
      </Modal.Header>
      <Modal.Body className="Login__body">
        <form className="Login__form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Log In" className="Login__submitbtn" />
          {isLoading && <LinearProgress />}
        </form>
        {err && <div className="Signup__Error">Saaketh</div>}
      </Modal.Body>
    </React.Fragment>
  );
}

export default Login;
