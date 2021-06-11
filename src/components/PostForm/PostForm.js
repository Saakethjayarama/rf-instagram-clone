import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createPost, auth } from "../../Firebase";
import "./PostForm.css";

function PostForm({ close }) {
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState();

  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    setLoading(true);

    createPost(file, {
      caption,
      likes: [],
      uid: auth.currentUser.uid,
      uname: auth.currentUser.displayName,
    })
      .then((res) => {
        setLoading(false);
        close();
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.error.message);
      });
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
        <form className="PostForm__form" onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder="Image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <textarea
            placeholder="Caption"
            rows={5}
            className="PostForm__caption"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <input type="submit" value="Post" className="PostForm__submitbtn" />
          {isLoading && <LinearProgress />}
        </form>
        {err && <div className="Signup__Error">{err}</div>}
      </Modal.Body>
    </React.Fragment>
  );
}

export default PostForm;
