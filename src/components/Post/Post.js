import React, { useEffect, useState } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import "./Post.css";
import { auth, disLikePost, likePost } from "../../Firebase";

// Material ui icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((themes) => ({
  avatar: {
    margin: themes.spacing(1),
  },
  likebtn: {
    cursor: "pointer",
    fontSize: themes.spacing(4),
  },
  liked: {
    color: "#ED4956",
  },
}));

function Post({ post }) {
  const classes = useStyles();
  const { id, url, caption, uname, likes } = post;

  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    if (likes.indexOf(auth.currentUser.uid) == -1) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }, [likes]);

  const likeHandler = () => {
    likePost(id, auth.currentUser.uid);
    if (isLiked) {
      setLiked(false);
      disLikePost(id, auth.currentUser.uid);
    } else {
      setLiked(true);
      likePost(id, auth.currentUser.uid);
    }
  };

  return (
    <div className="Post">
      {/* Post Header */}
      {/* Avatar */}
      <div className="Post__head">
        {/* Acc name */}
        <div className="Post__head__user">
          <Avatar alt={uname} className={classes.avatar}>
            {uname?.charAt(0)}
          </Avatar>
          <div className="Post__head__username">{uname}</div>
        </div>
      </div>
      {/* Img */}
      <img src={url} className="Post__image" />
      {/* Footer */}
      <div className="Post__footer">
        {/* like */}
        <div className="Post__footer__likes">
          {isLiked ? (
            <FavoriteIcon
              className={`${classes.liked} ${classes.likebtn}`}
              onClick={likeHandler}
            />
          ) : (
            <FavoriteBorderIcon
              className={classes.likebtn}
              onClick={likeHandler}
            />
          )}
          <div className="Post__footer__likes__count">{likes.length}</div>
          <div className="Post__footer__caption">
            <div className="Post__footer___caption__username">sudo_daemon</div>
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
