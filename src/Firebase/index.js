import { auth } from "./Firebase";
import {
  createUser,
  signIn,
  signOut,
  updateProfile,
  checkUserNames,
} from "./Authentication";
import { createPost, getPosts, likePost, disLikePost } from "./Post";

export {
  createUser,
  signIn,
  signOut,
  updateProfile,
  checkUserNames,
  auth,
  createPost,
  getPosts,
  likePost,
  disLikePost,
};
