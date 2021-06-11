import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./PostForm.css";

function PostForm() {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
          <input type="file" placeholder="Image" />
          <textarea
            placeholder="Caption"
            rows={5}
            className="PostForm__caption"
          ></textarea>
          <input type="submit" value="Post" className="PostForm__submitbtn" />
          {isLoading && <LinearProgress />}
        </form>
        {err && <div className="Signup__Error">{err}</div>}
      </Modal.Body>
    </React.Fragment>
  );
}

export default PostForm;
