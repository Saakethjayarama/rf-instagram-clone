import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function PostForm() {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <Modal.Header className="PostForm__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="PostForm__logo"
        />
      </Modal.Header>
      <Modal.Body className="PostForm__body">
        <form className="PostForm__form">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Log In" className="PostForm__submitbtn" />
          {isLoading && <LinearProgress />}
        </form>
        {err && <div className="Signup__Error">Saaketh</div>}
      </Modal.Body>
    </React.Fragment>
  );
}

export default PostForm;
