import { auth } from "./Firebase";

const createUser = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};

const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const updateProfile = (user, { displayName, photoURL }) =>
  user.updateProfile({ displayName, photoURL });

const signOut = () => auth.signOut();

export { createUser, signIn, updateProfile, signOut };
