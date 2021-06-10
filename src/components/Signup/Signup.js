import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createUser, checkUserNames } from "../../Firebase";

import "./Signup.css";

function Signup({ close }) {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enabled = email != "" && name != "" && username != "" && password != "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    createUser(email, password, name, username)
      .then(() => {
        close();
      })
      .catch((err) => {
        console.log(err);
        // setErr(err.error.message);
        setLoading(false);
      });
  };

  const handleBlur = () => {
    setErr("");
    checkUserNames(username).catch(() => {
      setErr("Username Exists");
    });
  };

  return (
    <React.Fragment>
      <Modal.Header className="Signup__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="Signup__logo"
        />
      </Modal.Header>
      <Modal.Body className="Signup__body">
        <form className="Signup__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onBlur={handleBlur}
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
                ? "Signup__submitbtn"
                : "Signup__submitbtn Signup__submitbtnDisabled"
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

export default Signup;
