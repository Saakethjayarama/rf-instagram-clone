import React, { useState } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import "./Post.css";

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

function Post() {
  const classes = useStyles();

  const [isLiked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="Post">
      {/* Post Header */}
      {/* Avatar */}
      <div className="Post__head">
        {/* Acc name */}
        <div className="Post__head__user">
          <Avatar
            alt="Remy Sharp"
            src="./user.jpg"
            className={classes.avatar}
          />
          <div className="Post__head__username">sudo_daemon</div>
        </div>
        {/* Options */}
        <div className="Post__head__options">
          <div className="Post__head__option">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      {/* Img */}
      <img src="./post.jpg" className="Post__image" />
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
          <div className="Post__footer__likes__count">126,459 likes</div>
          <div className="Post__footer__caption">
            <div className="Post__footer___caption__username">sudo_daemon</div>
            Saaketh is good boy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
