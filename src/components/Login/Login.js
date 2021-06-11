import React, { useState } from "react";
import "./Login.css";
import { signIn } from "../../Firebase";

// Bootstrap
import { Modal } from "react-bootstrap";
import { LinearProgress, Typography } from "@material-ui/core";

function Login({ close, main }) {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enabled = email != "" && password != "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    signIn(email, password)
      .then((res) => {
        close();
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.error.message);
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Modal.Header className="Login__header">
        {!main ? (
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            className="Login__logo"
          />
        ) : (
          <Typography variant="h2">Login</Typography>
        )}
      </Modal.Header>
      <Modal.Body className="Login__body">
        <form className="Login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="submit"
            value="Log In"
            className={
              enabled
                ? "Login__submitbtn"
                : "Login__submitbtn Login__submitbtnDisabled"
            }
            disabled={!enabled}
          />
          {isLoading && <LinearProgress />}
        </form>
        {err && <div className="Signup__Error">{err}</div>}
      </Modal.Body>
    </React.Fragment>
  );
}

export default Login;
